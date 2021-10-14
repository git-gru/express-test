"use strict";

const express = require("express");
const app = express();

// api route
app.get("/vidaudit", async (req, res) => {
  const { pageNumber, pageSize } = req.query;
  
  res.send("Videos");
});

// Server
const HOST = "127.0.0.1";
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
