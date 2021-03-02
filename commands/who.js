module.exports = {
  name: "whois",
  decription: "whois command",
  execute(message, args) {
    switch (args[0]) {
      case "astatine":
        message.channel.send(
          "He is the greatest of all you nerds and he is my creator so yeah 😂 😁"
        );
        break;

      case "astajr":
        message.channel.send(
          "It's me, a bot who is more useful and meaningful than you 😁 😂 😎"
        );
        break;

      case "":
        message.channel.send("who are you asking about broo?!? 😫 🥱");
        break;

      case " ":
        message.channel.send("who are you asking about broo?!? 😫 🥱");
        break;

      default:
        message.reply(
          "I don't seem to recognize him  🤨 so he must be a stupid normie baby  👶🏻"
        );
        break;
    }
  },
};
