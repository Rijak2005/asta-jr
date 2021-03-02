const fetch = require("node-fetch");
module.exports = async (client) => {
  //  This is Id pls replace in new server
  const guild = client.guilds.cache.get("814869735300268082");
  const youtubeKey = "AIzaSyDCvtrWr-Jm-e-vdCWSxEH-vXOIhCttVvY";
  const youtubeUser = "UCKw6xQOZZQmkHmwTQ1sSHcA";
  var subsCount = 0;
  setInterval(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        subsCount = data["items"][0].statistics.subscriberCount;
      });
    // Change channel id after new server
    const channel = guild.channels.cache.get("815922785813135360");
    channel.setName(`YouTube Subs 📺: ${subsCount.toLocaleString()}`);
  }, 6000);
};
