module.exports = {
  name: "create",
  decription: "create command",
  async execute(message, args, User) {
    if (
      !message.author.id === "539789850983923712" &&
      !message.member.roles.highest.id === "839500139836080231"
    ) {
      message.channel.send(
        "Bruh. You can't use this command its only for monitors!"
      );
      return;
    }
    if (!message.mentions.members.first()) {
      message.reply("You need to specify a user!");
    }
    //create astajr account
    const response = await User.create({
      discordId: member.user.id,
      discordUser: member.user.tag,
      astaCoins: args[0],
    });
  },
};
