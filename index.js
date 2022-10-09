const express = require("express");
const request = require("request-promise");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const generateScrapeUrl = (apiKEY) =>
  `http://api.scraperapi.com?api_key=${apiKEY}&autoparse=true`;
//const baseURL = `http://api.scraperapi.com?api_key=${apiKEY}&autoparse=true`;

app.get("/", (req, res) => {
  console.log("Request made");
  res.send("Welcome to Amazon Scrapper API by Green");
});

//Route for fetching product details
app.get("/product/:productId", async (req, res) => {
  const { productId } = req.params;
  const { your_api_key } = req.query;

  try {
    const response = await request(
      `${generateScrapeUrl(
        your_api_key
      )}&url=https://amazon.com/dp/${productId}`
    );
    res.json(JSON.parse(response)); //parsed the data json
  } catch (error) {
    res.json(error);
  }
});

//Route for fetching detailed review of product

app.get("/reviews/:productId", async (req, res) => {
  const { productId } = req.params;
  const { your_api_key } = req.query;

  try {
    const response = await request(
      `${generateScrapeUrl(
        your_api_key
      )}&url=https://amazon.com/dp/${productId}`
    );
    res.json(JSON.parse(response)); //parsed the data json
  } catch (error) {
    res.json(error);
  }
});

//Route for fetching product offers

app.get("/offers/:productId", async (req, res) => {
  const { productId } = req.params;
  const { your_api_key } = req.query;

  try {
    const response = await request(
      `${generateScrapeUrl(
        your_api_key
      )}&url=https://amazon.com/dp/${productId}`
    );
    res.json(JSON.parse(response)); //parsed the data json
  } catch (error) {
    res.json(error);
  }
});

//Route for search querry results for any product we decide to search for

app.get("/search/:searchQuery", async (req, res) => {
  const { searchQuery } = req.params;
  const { your_api_key } = req.query;

  try {
    const response = await request(
      `${generateScrapeUrl(
        your_api_key
      )}&url=https://amazon.com/s?k=${searchQuery}`
    );
    res.json(JSON.parse(response)); //parsed the data json
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
