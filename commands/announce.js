module.exports = {
    name: "announce",
    decription: "announce command",
    execute(message, args) {
        switch (args[0]) {
            case "stream":
                message.channel.send("@everyone",{
                    embed: {
                      title: "🥳🎉👯‍♂️ OP Astatine Stream announcement! 🥳🎉👯‍♂️",
                      description:"You guys are lucky cuz Professor Astatine is going to stream today!",
                      fields:[
                          {
                              name: "⏲ Time ⏲",
                              value: args[1]
                          },
                          {
                              name: "🏫 Place 🏫",
                              value: "Youtube"
                          },
                          {
                              name: "🥳 Fun 🥳",
                              value: "\n FULL"
                          },

                      ],
                      image: {
                        url: message.attachments.toJSON()[0]["url"],
                      },
                      color:0x2ac7b1,
                    },
                  });
                  setTimeout(() => {
                    message.delete();
                  }, 500);
                break;
        
            default:
                message.delete();
                break;
        }
    },
  };
  