module.exports = {
  name: "balance",
  decription: "Balance command",
  async execute(message, args, User) {
    if (message.mentions.members.first()) {
      const user = await User.findOne({
        discordId: message.mentions.members.first().id,
        discordUser: message.mentions.members.first().user.tag,
      });
      user
        ? message.reply(
            `${
              message.mentions.members.first().user.username
            } currently has ✦ ${user.astaCoins}`
          )
        : message.reply(
            `They don't have an account with me. Please contact the mods!`
          );
    }
    const user = await User.findOne({
      discordId: message.member.id,
      discordUser: message.member.user.tag,
    });
    user
      ? message.reply(`You currently have ✦ ${user.astaCoins}`)
      : message.reply(
          `You don't have an account with me. Please contact the mods!`
        );
  },
};
