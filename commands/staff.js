var fs = require("fs");
var path = require("path");
module.exports = {
  name: "staff",
  decription: "Staff Application command",
  async execute(message, args) {
    const questions = [
      "What is your name?",
      "What is your REAL age?",
      "In which country do you live?",
      "Why do you want to be a monitor?",
      "How many hours can you devote to being a monitor on the server?",
      "Are you subcribed to Professor Astatine?",
    ];
    const appOpen = true;
    var answers = [];
    var pathToCsv = path.join(__dirname, "..", "staff-data.csv");
    var dmCh = message.channel;
    if (!appOpen) {
      message.author.send(
        "Sorry, the staff applications are closed at the moment!"
      );
    } else {
      message.reply("Check your DM's!");
      message.author.send(
        "So I heard you wanna be a monitor huh 🤨...\nI am gonna need you to answer some questions:\n"
      );
      for (var x = 0; x < questions.length; x++) {
        await message.author
          .send({
            embed: {
              title: `***Q${x + 1}. ${questions[x]}***`,
              description:
                "Please answer questions honestly and if asked about your details, please provide REAL life details",
              footer: {
                text: "You have 1 minute to answer questions!",
              },
              color: 0xe556f5,
            },
          })
          .then((msg) => {
            dmCh = msg.channel;
          })
          .catch((err) => {
            try {
              message.author.send("Some error occurred");
            } catch (e) {
              console.log(e);
            }
          });
        // dmCh
        //   .awaitMessages({ max: 1, time: 60000 })
        //   .then((answer) => {
        //     // answers.append(answer.toLowerCase());
        //     console.log(answer);
        //   })
        //   .catch((collected) => {
        //     // console.log(collected);
        //   });
        const filter = (m) => m.author.bot === false;
        await dmCh
          .awaitMessages(filter, {
            max: 1,
            time: 60000,
          })
          .then((collected) => {
            answers.push(collected.toJSON()[0].content.toLowerCase());
          })
          .catch((collected) => {
            try {
              console.log("Error" + collected);
            } catch (e) {
              console.log(e);
            }
          });
      }
      var fileContent = fs.readFileSync(pathToCsv, "utf8");
      fs.writeFileSync(
        pathToCsv,
        `${fileContent}\n${answers.join()},${
          message.author.tag
        },${message.member.joinedAt.getDate()}/${message.member.joinedAt.getMonth()}/${message.member.joinedAt.getFullYear()}`
      );
      answers = [];
    }
  },
};
