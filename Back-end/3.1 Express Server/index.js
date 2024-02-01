import express from "express";
const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
    console.log(req.headers);
});

app.get("/about", (req, res) => {
  res.sendFile("C:/Users/velazcof/OneDrive - Co-Operative Bulk Handling Ltd/Documents/Code/3.1 Express Server/about.html");
  console.log(req.headers);
});

app.get("/contact", (req, res) => {
  res.sendFile("C:/Users/velazcof/OneDrive - Co-Operative Bulk Handling Ltd/Documents/Code/3.1 Express Server/contact.html");
  console.log(req.headers);
});

