module.exports = {
  name: "cancel",
  decription: "cancel subscription command",
  execute(message, args) {
    var user = message.mentions.members.first();
    if (message.author.username !== "Mr.Astatine") {
      message.reply("I only take commands from my master so get lost!");
      return;
    }
    if (!user) {
      message.reply("Please tell me whose membership to cancel...");
      return;
    }

    user.roles.remove("814871546724220939");
    message.channel.send(
      `${user} who do you think you are? my master saw your metal bot ass cheating so I have removed you from premium and if you fool me again I will kick you out of this server understood!?`
    );
    message.delete();
  },
};
