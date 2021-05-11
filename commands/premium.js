module.exports = {
  name: "premium",
  decription: "premium command",
  execute: async (message, args, bot) => {
    if (message.channel.id !== "815895796683374592") {
      //REPLACE CHANNEL IN CLASS
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
    const filter = (m) =>
      m.author.id === message.author.id || m.author.id === "270904126974590976";

    var transaction = false;
    // 1. "So i heard you want to be premium? huh.. Let's see if you are worth it! To embark on this quest you will need 40k DMC and a screenshot of your subscription to professor astatine! you have 2 minutes to collect these and then i will start the quest. So be quick!"
    message.reply(
      "So i heard you want to be premium? huh.. Let's see if you are worth it! To embark on this quest ***you will need 40k DMC*** and ***a screenshot of your subscription to professor astatine!*** you have 1 minute to collect these and then i will start the quest. So be quick!"
    );
    //2. Start 2 minutes after 10 seconds
    setTimeout(async () => {
      message.reply(
        "Let's hope you got your things! you have 30 seconds to type this into the chat: `pls give 32609 @mr.astatine`"
      );
      await message.channel
        .awaitMessages(filter, { max: 2, time: 33000 })
        .then(async (collected) => {
          for (var mes of collected.toJSON()) {
            console.log(mes);
            // console.log(mes.content.includes("You gave Mr.Astatine **⏣ 1**")&&mes.authorID==="270904126974590976"&&mes.content.includes(message.author.id));
            if (
              mes.content.includes("You gave Mr.Astatine **⏣ 30,000**") &&
              mes.authorID === "270904126974590976" &&
              mes.cleanContent.includes(message.author.username)
            ) {
              transaction = true;
              break;
            }
            transaction = false;
          }
          //  message.reply(transaction===true ? "Looks like you have the money noice...": "You poor son of your mom you didn't give money why would you want to waste my time!?");
        })
        .catch((err) => {
          message.reply(
            "What a noob you couldn't complete this in 30 seconds OMG!"
          );
          message.channel.bulkDelete(4);
          return;
        });
      if (transaction) {
        message.reply("Looks like you have the money...NOICE...");
      } else {
        message.reply(
          "You poor son of your mom you didn't give money why would you want to waste my time!?"
        );
        message.channel.bulkDelete(4);
        return;
      }
      message.reply(
        "Now send the screenshot of your subscription! You have 55 seconds for this"
      );
      message.channel
        .awaitMessages(filter, { max: 1, time: 58000 })
        .then((collectedMes) => {
          if (!collectedMes.first().attachments.first()) {
            message.reply(
              "ooooo oooooo oooo, You really are an idiot 😱. Like you seriously can't even send an image WTF! Now your coins can't be refunded cuz its your fault that you are an idiot!! Try starting the quest again or contact  Monitors!"
            );
            setTimeout(() => {
              message.channel.bulkDelete(9);
              return;
            }, 10000);
          } else {
            bot.users.cache
              .get("539789850983923712")
              .send(
                `${message.author.username} applied for a premium mebership... And i gave it to him i am attaching his pic so u can see as well!`,
                {
                  embed: {
                    image: {
                      url: collectedMes.first().attachments.first().url,
                    },
                  },
                }
              );
            //Change ID's in Class
            bot.channels.fetch("815919568891019304").then((ch) => {
              ch.send(`<@${message.author.id}>`, {
                embed: {
                  title: `Congratulations! ${message.author.username}.`,
                  thumbnail: {
                    url: message.author.avatarURL()
                      ? message.author.avatarURL()
                      : message.author.defaultAvatarURL,
                  },
                  description:
                    "You have completed the **Quest of the Premium 💎**, proving that you are absolutely worthy to become a premium member!\n I bow to you 🙇‍♂️\nAnd now you'll be rewarded with the premium role!\n ENJOYY!",
                  color: 0x2ac7b1,
                },
              });
            });
            // REPLACE ID"S IN CLASS
            message.member.roles.add("814871546724220939");
            message.member.roles.remove("814870385115136041");

            message.channel.bulkDelete(9);
          }
        })
        .catch((err) => {
          message.reply(
            "What a noob you couldn't even send your ss in 55 seconds OMG! Now your money is Lost! lmao"
          );
          console.log(err);
        });
    }, 60000);
  },
};
