module.exports = {
  name: "link",
  decription: "link command",
  execute(message, args) {
    switch (args[0]) {
      case "youtube":
        message.channel.send(
          "https://www.youtube.com/channel/UCKw6xQOZZQmkHmwTQ1sSHcA/featured"
        );
        break;

      case "instagram":
        message.channel.send("https://www.instagram.com/professorastatine/");
        break;

      default:
        message.channel.send("Please ask for a valid link 😫 🥱");
        break;
    }
  },
};
