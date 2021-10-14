"use strict";

var axios = require("axios");

async function getVideos(start, max) {
  try {
    const res = await axios.get(
      `http://api.toongoggles.com/getobjects?version=12&object_type=video&video_type=feature&start=${start}&max=${max}`
    );
    return {
      num_results: res.data?.num_results || 0,
      videos: res.data?.objects || [],
    };
  } catch (err) {
    return;
  }
}

module.exports = {
  getVideos,
};
