const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const apiData = require("./data.json");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello I am live");
});

app.get("/service", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log("I am live again");
});
