module.exports = {
  name: "give",
  decription: "give command",
  async execute(message, args, User) {
    if (isNaN(args[0]) || parseInt(args[0]) < 0) {
      message.channel.send(
        "You have to specify a real number, smarty pants :)\nThis is how the command should look `astajr give <amount> <person>`"
      );
      return;
    }
    let transAmount = parseInt(args[0]);
    let senderBal = await User.findOne({
      discordId: message.member.id,
      discordUser: message.member.user.tag,
    });
    if (senderBal.astaCoins < transAmount) {
      message.channel.send(
        `You can't give money you don't have!\nYou currently have ✦ ${senderBal.astaCoins}`
      );
      return;
    }
    let recieverBal = await User.findOne({
      discordId: message.mentions.members.first().id,
      discordUser: message.mentions.members.first().user.tag,
    });

    let senderUpdate = await User.updateOne(
      {
        discordId: message.member.id,
        discordUser: message.member.user.tag,
      },
      {
        $inc: {
          astaCoins: -transAmount,
        },
      }
    );
    let recieverUpdate = await User.updateOne(
      {
        discordId: message.mentions.members.first().id,
        discordUser: message.mentions.members.first().user.tag,
      },
      {
        $inc: {
          astaCoins: transAmount,
        },
      }
    );
    message.channel.send(
      `Yay! You sent **${transAmount}** AstaCoins to ${
        message.mentions.members.first().user.username
      } now you have ✦ ${senderBal.astaCoins - transAmount} and they have ✦ ${
        recieverBal.astaCoins + transAmount
      }.`
    );
  },
};
