module.exports = {
  name: "verify",
  decription: "verify command",
  execute(message, args, bot) {
    if (message.channel.id !== "815895796683374592") {
      message.reply(
        "THIS SERVER IS ORGANIZED!! go to the <#815895796683374592> channel to verify your screenshot!"
      );
      return;
    }

    if (message.member.roles.cache.has("814871546724220939")) {
      message.reply(
        "What you u want from life broo ?, you are already a premium member!"
      );
      return;
    }

    if (JSON.stringify(message.attachments) === "[]") {
      message.reply(
        "There is no image to verify, who the hell do you think you are !?"
      );
    } else {
      bot.users.cache
        .get("539789850983923712")
        .send(
          `<@${message.author.id}> applied for a premium mebership... Andi gave it to him i am attaching his pic so u can see as well!`,
          {
            embed: {
              image: {
                url: message.attachments.toJSON()[0]["url"],
              },
            },
          }
        );
      message.reply(
        "Ok I saw your image.. I am not as smart as my master though but i will give the premium to you but if my master notices that you have cheated, I will kick your metal ass out of the server :)"
      );
      message.member.roles.add("814871546724220939");
    }
  },
};
