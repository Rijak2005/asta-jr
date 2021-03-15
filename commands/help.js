module.exports = {
  name: "help",
  decription: "help command",
  execute(message, args) {
    if (args[0]) {
      switch (args[0].toLowerCase()) {
        case "useful":
          message.channel.send({
            embed: {
              title: "Useful Commands  📜",
              description: `I am not entirely useless so here are some useful commands of mine`,
              fields: [
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name: "Verify  ✅",
                  value:
                    "Use this command to get premium membership. Type 'astajr help verify' for more details",
                },
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name: "Link  🔗",
                  value:
                    "Use this command to get the links for the professor's social media. Type 'astajr help link' for more details",
                },
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
              ],
              footer: {
                text:
                  'Remember that all commands have to be prefixed with "astajr" (without the quotation marks ofcourse)',
              },
              color: 0xe556f5,
            },
          });
          break;

        case "useless":
          message.channel.send({
            embed: {
              title: "Useless Commands  🕹",
              description: `I am not entirely serious so here are some useless and fun commands of mine`,
              fields: [
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name: "Who  ⁉",
                  value:
                    "Ask who is who. Type 'astajr help who' for more details",
                },
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name: "Ping  🏓",
                  value:
                    "Classic Ping command for bots. Type 'astajr ping' to use this command",
                },
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name: "Do you play ____  🤔",
                  value:
                    "Ask me if I play any game. Type 'astajr do you play (write any game name here)' to use this command",
                },
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name: "Food 🍕",
                  value:
                    "Your go to command when you need some mouth-watering. Type 'astajr help food' for more details!",
                },
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
              ],
              footer: {
                text:
                  'Remember that all commands have to be prefixed with "astajr" (without the quotation marks ofcourse)',
              },
              color: 0xe556f5,
            },
          });
          break;

        case "link":
          message.channel.send({
            embed: {
              title: "The Link Command 🔗",
              description: `Use this command to get links of the professor's social media`,
              fields: [
                {
                  name: "For instagram link:",
                  value: "astajr link instagram",
                },
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name: "For youtube link",
                  value: "astajr link youtube",
                },
              ],
              color: 0xe556f5,
            },
          });
          break;

        case "food":
          message.channel.send({
            embed: {
              title: "The Food Command 🍕",
              description: `Use this command to get photos of delicious food items!`,
              fields: [
                {
                  name: "Format for using the command",
                  value: "astajr food [food item(optional)]",
                },
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name:
                    "Writing a specific food item will give you image of that item but if you don't give a food item then I'll just make some random dish for you",
                  value:
                    "Possible food items are: Pizza, burger, idly, dosa, biryani",
                },
              ],
              footer: {
                text: "The preparation time of food is 2.5 seconds!",
              },
              color: 0xe556f5,
            },
          });
          break;

        case "who":
          message.channel.send({
            embed: {
              title: "The Who Command  ❔",
              description: `Ask me who is astatine or other people`,
              fields: [
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name: "Write the command like this",
                  value: "astajr whois someone",
                },
                {
                  name:
                    "Instead of soemone you can write any one of the following:",
                  value: "astatine, astajr or you can tag anyone in the server",
                },
              ],
              color: 0xe556f5,
            },
          });
          break;

        case "verify":
          message.channel.send({
            embed: {
              title: "The Verify Command  ✅",
              description: `Use this command to get premium membership \n  ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ \n Remember that you need to attach a screenshot of your subscription with this message and that you can only use this command in the premium verification channel`,
              fields: [
                {
                  name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                  value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
                },
                {
                  name: "Write the command like this",
                  value: "astajr verify",
                },
              ],
              color: 0xe556f5,
              files: [
                {
                  attachment: "./assets/example-image.PNG",
                },
              ],
            },
          });
          break;

        default:
          message.channel.send(
            "Broo has your mind gone away? Please check if you wrote a correct command. If it is, then that command doesn't need any explaination !? just write it as it is with astajr in front"
          );
          break;
      }
    } else {
      message.channel.send({
        embed: {
          title: "OOOh you're interested in me 😏 sorry i am not old enough",
          description: `Oh you meant commands 😅... Here you go 😂 \n ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ \n Remember that all commands have to be prefixed with "astajr" (without the quotation marks ofcourse)`,
          fields: [
            {
              name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
              value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
            },
            {
              name: "Useless Fun Commands 🕹",
              value: "Just random fun and useless commands",
            },
            {
              name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
              value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
            },
            {
              name: "Useful Commands 📜",
              value: "This is stuff that is important",
            },
            {
              name: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
              value: "​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎ ​‎‎‎",
            },
          ],
          footer: {
            text:
              "If you want info about any specific category say 'astajr help useful/useless' (Don't put slash ofcourse and only write one category)",
          },
          color: 0xe556f5,
        },
      });
    }
  },
};
