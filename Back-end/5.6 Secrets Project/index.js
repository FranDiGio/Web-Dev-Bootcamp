import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random");
        res.render("index.ejs", { secret: JSON.stringify(result.data["secret"]), user: JSON.stringify(result.data["username"]) });
        console.log(JSON.stringify(result.data["secret"]) + JSON.stringify(result.data["username"]));
    } catch (error) {
        res.render("index.ejs", { secret: JSON.stringify(result.error.response.data), user: "None" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

