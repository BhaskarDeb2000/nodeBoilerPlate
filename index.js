//const express = require("express"); ##OLD METHOD

import express from "express"; // NEW METHOD

const app = express();
const port = 3000;

app.get("/orghoDev", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening on port http://localhost:${port}/orghoDev/`
  );
});
