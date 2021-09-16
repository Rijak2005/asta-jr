var fs = require("fs");
var path = require("path");
module.exports = {
  name: "suggest",
  decription: "suggest command",
  async execute(message, args, bot) {
    const likeEmoji = "👍🏽";
    const dislikeEmoji = "👎🏽";
    const pathToLog = path.join(
      __dirname,
      "..",
      "models",
      "suggestionData.txt"
    );
    var suggestions = fs.readFileSync(pathToLog, "utf8").split("\n");
    var sentMessage = null;
    // Chnage the channel in the main server
    await bot.channels.fetch("883253485657796608").then(async (ch) => {
      sentMessage = await ch.send({
        embed: {
          // title: `💡 **Suggestion from ${message.author.tag}** 💡`,
          title: `#${suggestions.length}: **${args.join(" ").toUpperCase()}**`,
          fields: [
            // {
            //   name: `${message.author.username} says:\n`,
            //   value: `***${args.join(" ")}***`,
            // },
            {
              name: `💡 **A suggestion from ${message.author.tag}** 💡`,
              value: `​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ `,
            },
          ],
          footer: {
            text: "To make your suggestion, please type: astajr suggest {your_suggestion_here} in any channel",
          },
          color: 0x39ff14,
        },
      });
    });
    sentMessage.react(likeEmoji);
    sentMessage.react(dislikeEmoji);
    fs.writeFileSync(
      pathToLog,
      `${suggestions.join("\n")}\n#${suggestions.length}:${args.join(" ")} by ${
        message.author.tag
      } at ${new Date()}`
    );
    message.reply("Suggestion posted!");
  },
};
