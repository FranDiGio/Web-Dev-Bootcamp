//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: "true"}));

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile("C:/Users/velazcof/OneDrive - Co-Operative Bulk Handling Ltd/Documents/Code/3.5 Secrets Project/public/index.html");
});

app.post("/check", (req, res) => {
    if(req.body["password"] === "ILoveProgramming"){
        res.sendFile("C:/Users/velazcof/OneDrive - Co-Operative Bulk Handling Ltd/Documents/Code/3.5 Secrets Project/public/secret.html");
        console.log("Password match!");
    }
    else {
        res.redirect("/");
    }
});