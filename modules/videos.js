"use strict";

var axios = require("axios");

async function getVideos() {
  try {
    const res = await axios.get("http://api.toongoggles.com/getobjects?version=12&object_type=video&video_type=feature");
    return res.data?.objects || [];
  } catch (err) {
    return;
  }
}

module.exports = {
  getVideos
};
