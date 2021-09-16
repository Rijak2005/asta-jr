const random = require("random");
const path = require("path");
module.exports = {
  name: "joke",
  decription: "Joke command",
  execute(message, args) {
    let randomNum = random.int((min = 1), (max = 10));
    //1. Join the channel!
    let vc = message.member.voice.channel;
    if (vc) {
      vc.join()
        //2. play the joke
        .then((connection) => {
          connection
            .play(
              path.join(
                __dirname,
                "..",
                "assets",
                "sounds",
                "jokes",
                `joke${randomNum}.mp3`
              ),
              {
                seek: 0,
                volume: 1,
              }
            )
            .on("finish", async () => {
              vc.leave();
              let mes = await message.reply("LOL..Did you like it?");
              mes.react("👍");
              mes.react("👎");
              message.delete();
            });
        })
        .catch((err) => {
          vc.leave();
          console.log(err);
        });
    } else {
      message.reply(
        "If you wanna hear a joke you have to join a Voice Channel common sense tbh 🤦‍♂️🤦‍♂️"
      );
    }
    //3. ask to play another
    //4. yes--> play another---> ask
    //5. no---> leave!
  },
};
