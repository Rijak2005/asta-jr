const random = require("random");
const topics = require("../models/topicData");
module.exports = {
  name: "topic",
  decription: "Random topic generator command",
  execute(message, args) {
    message.delete();
    let randNum = random.int((min = 0), (max = topics.length));
    let title, desc;
    switch (random.int(1, 4)) {
      case 1:
        title = "Oh chat ded or what?";
        desc = "GUYSS just talk on this topic!!";
        break;
      case 2:
        title = "Oh is chat ded?";
        desc =
          "Worry not for astajr is here to revive it! 🦸‍♂️\nHey peeps take this topic and tell your answer 👀 :";
        break;
      case 3:
        title = "The chat is ded but I am not! 💀";
        desc =
          "Take this topic from a very good bot 🤖\nAnd plz plz chat or I'll smash my head in a pot (🚽? 🏺?)";
        break;
      case 4:
        title = "Yooo chat ded";
        desc =
          "Well I don't really care but anyways\nI'm a bot so it don't take me long\n So take this topic and enjoy!";
        break;

      default:
        break;
    }
    message.channel.send({
      embed: {
        title: title,
        description: desc,
        fields: [
          {
            name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
            value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
          },
          {
            name: "***TOPIC***",
            value: `**${topics[randNum]}**`,
          },
        ],
        footer: {
          text: "Hmmm... Interesting one 🤔!",
        },
        color: 0xe556f5,
      },
    });
  },
};
