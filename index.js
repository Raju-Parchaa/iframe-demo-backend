const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/home", (req, res) => {
  res.json({ url: "https://www.parchaa.com" }).status(200);
});
app.get("/app", (req, res) => {
  res.json({ url: "https://app.parchaa.com/" }).status(200);
});
app.get("/about", (req, res) => {
  res.json({ url: "https://www.parchaa.com/about" }).status(200);
});
app.get("/contact", (req, res) => {
  res.json({ url: "https://www.parchaa.com/contact" }).status(200);
});

const PORT = 8080;

app.listen(PORT, () => console.log(`app running on ${PORT}`));
