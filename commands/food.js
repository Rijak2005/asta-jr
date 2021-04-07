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

        case "butter-chicken":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        case "dessert":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        case "samosa":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        case "rice":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        case "pasta":
          finalUrl = `${baseUrl}images/${args[0].toLowerCase()}`;
          break;

        default:
          finalUrl = baseUrl;
          args[0] = null;
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
    }, 3000);
  },
};
