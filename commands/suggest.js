module.exports = {
  name: "suggest",
  decription: "suggest command",
  execute(message, args, bot) {
    bot.channels.fetch("883253485657796608").then((ch) => {
      ch.send({
        embed: {
          title: `Suggestion from ${message.author.username}`,
          fields: [
            {
              name: `${message.author.username} says:\n`,
              value: `***${args.join(" ")}***`,
            },
            {
              name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎​‎‎‎",
              value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎​‎‎‎",
            },
          ],
          footer: {
            text: "To make your suggestion, please type: astajr suggest {your_suggestio_here} in any channel",
          },
          color: 0x39ff14,
        },
      });
    });
    message.reply("Suggestion posted!");
  },
};
