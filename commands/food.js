const fetch = require("node-fetch");
module.exports = {
  name: "food",
  decription: "Food command",
  execute(message, args) {
    var baseUrl = "https://foodish-api.herokuapp.com/api/";
    var finalUrl;

    if (!args[0]) {
      finalUrl = baseUrl;
    } else {
      switch (args[0].toLowerCase()) {
        case "pizza":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        case "burger":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        case "idly":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        case "dosa":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        case "biryani":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        default:
          message.reply(
            "That's not a valid food item ya dumbo :P Please type astajr help food if you need a refresher 😀"
          );
          message.channel.bulkDelete(2);
          return;
          break;
      }
    }
    var imgUrl = "";
    fetch(finalUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        imgUrl = data.image;
        console.log(imgUrl);
      });

    setTimeout(() => {
      var foodMessage = args[0]
        ? "One delicious " + args[0].toLowerCase() + ". Here you go!"
        : "Food coming up!";
      message.channel.send(foodMessage, {
        embed: {
          image: {
            url: `${imgUrl}`,
          },
        },
      });
    }, 2500);
  },
};
