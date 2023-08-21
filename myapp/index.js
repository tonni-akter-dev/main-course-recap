const express = require("express");
var cors = require("cors");
const phones = require("./phones.json");
const app = express();
app.use(cors());
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello express app");
});
app.get("/phones", (req, res) => {
  res.send(phones);
});
app.get("/phones/:id", (req, res) => {
  const id = req.params.id;
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
  console.log(phone);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/* auto run er jonno nodemon */
