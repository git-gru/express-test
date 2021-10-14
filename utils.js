const formatSeconds = (sec) => {
  const parsed = parseInt(sec, 10);
  if (isNaN(parsed)) {
    return 0;
  }

  var date = new Date(null);
  date.setSeconds(parsed);

  return date.toISOString().substr(11, 8);
};

const hasWidescreenThumbnail = (strURL) => {
  const url = new URL(strURL);
  const regex = /img[0-9]\.static-ottera\.com/;
  return regex.test(url.hostname) && url.pathname.includes("/widescreen/");
};

const getEntryIdFromURL = (strURL) => {
  const regex = /entryId\/([^\/]+)\//;
  return regex.exec(strURL)[1];
};

module.exports = {
  formatSeconds,
  hasWidescreenThumbnail,
  getEntryIdFromURL,
};
