module.exports = {
  name: "leaderboard",
  decription: "leaderboard command",
  async execute(message, args, User) {
    const topTen = await User.find({}, ["discordUser", "astaCoins"], {
      limit: 10,
      sort: {
        astaCoins: -1,
      },
    });
    console.log(topTen);

    message.channel.send({
      embed: {
        title: "TOP FANS OF THE PROFESSOR",
        description: "Here are the people with the most AstaCoins!",
        fields: (function () {
          let fields = [];
          for (let x = 0; x < topTen.length; x++) {
            console.log(x);
            fields.push({
              name: `#${x + 1}. ${topTen[x].discordUser}: ${
                topTen[x].astaCoins
              }`,
              value: `‎`,
            });
          }
          return fields;
        })(),
        color: 0xe556f5,
      },
    });
  },
};
