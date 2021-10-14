"use strict";

const express = require("express");
const app = express();

const { getVideos } = require('./modules/videos');
const utils = require('./utils');

// api route
app.get("/vidaudit", async (req, res) => {
  const { pageNumber, pageSize } = req.query;
  const videos = await getVideos();

  const result = videos.map(v => {
    return {
      id: v.id,
      name: v.name,
      ad_breaks: v.ad_breaks.map(a => utils.formatSeconds(a)),
      duration: utils.formatSeconds(v.duration),
      hasWidescreenThumbnail: utils.hasWidescreenThumbnail(v.thumbnail_url),
      entryId: utils.getEntryIdFromURL(v.video_url),
      allowedCountries: v.allowed_countries.map(c => c.name),
    }
  });

  res.status(200).set("Content-Type", "application/json").json({ result });
});

// Server
const HOST = "127.0.0.1";
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
