import express from "express";
import axios from "axios";
import 'dotenv/config'; 

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = process.env.USERNAME;
const yourPassword = process.env.PASSWORD;
const yourAPIKey = process.env.API_KEY;
const yourBearerToken = process.env.BEARER_TOKEN;

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const URL = "https://secrets-api.appbrewery.com/all?page=2";
    const response = await axios.get(URL, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
      
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
  
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/filter?score=5&apiKey=" + yourAPIKey);
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const URL = "https://secrets-api.appbrewery.com/secrets/42"
    const response = await axios.get(URL, {
      headers: {
        Authorization: 'Bearer ' + yourBearerToken
      }
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch (error) {
    console.error("An error ocurred " + error.message)
    res.render("index.ejs", {
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
