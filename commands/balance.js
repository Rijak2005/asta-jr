module.exports = {
  name: "balance",
  decription: "Balance command",
  async execute(message, args, User) {
    const user = await User.findOne({
      discordId: message.member.id,
      discordUser: message.member.user.tag,
    });
    message.reply(`You currently have ✦ ${user.astaCoins}`);
  },
};
