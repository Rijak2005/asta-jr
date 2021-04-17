const random = require("random");
module.exports = {
  name: "whois",
  decription: "whois command",
  execute(message, args) {
    switch (args[0].toLowerCase()) {
      case "astatine":
        message.channel.send(
          "He is the greatest of all you nerds and he is my creator so yeah 😂 😁"
        );
        break;

      case message.author.username.toLowerCase():
        message.channel.send(
          "Why u messin wid me bruh?! It's you, a person who has nothing to do except asking bots about themselves"
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
        switch (random.int((min = 1), (max = 3))) {
          case 2:
            message.reply(
              "Sounds like a great person... I actually kinda feel bad for not knowing them"
            );
            break;

          case 3:
            message.reply("A human 🤪");
            break;

          default:
            message.reply(
              "I don't seem to recognize him  🤨 so he must be a stupid normie baby  👶🏻"
            );
            break;
        }
        break;
    }
  },
};
