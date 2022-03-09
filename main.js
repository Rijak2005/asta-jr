const Discord = require("discord.js");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const fs = require("fs");

const dbURI =
  "mongodb+srv://astatine:Astajrzindabad1234@astajr-data.fivyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoose = require("mongoose");
const User = require("./models/user");

require("dotenv").config();

const memberCounter = require("./counters/member-counter.js");
const subsCounter = require("./counters/subs-counter.js");

client.commands = new Discord.Collection();

const prefix = "astajr ";

const version = "1.0.0";

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log("I am aliveeee!");
  memberCounter(client);
  subsCounter(client);
});

client.on("guildMemberAdd", async (member) => {
  member.roles.add("814870385115136041");
  client.channels.fetch("814895688735391754").then((channel) => {
    channel.send({
      embed: {
        title: `Welcome to the server ${member.user.username}.`,
        thumbnail: {
          url: member.user.avatarURL()
            ? member.user.avatarURL()
            : member.user.defaultAvatarURL,
        },
        description: `I am Astatine Jr. the assistant of the professor and you are the most shameful person if you haven't subscribed to the yt channel yet just sayin... \n Make sure to check out <#814869735300268085> & <#814869735300268084> to understand the server better! \n Enjoy your time here!`,
        footer: {
          text: "P.S. I can get a little toxic sometimes and I am sorry if I say something bad to you so don't mind and remember that I am a bot.",
        },
        color: 0x2ac7b1,
      },
    });
  });
  //create astajr account
  const response = await User.create({
    discordId: member.user.id,
    discordUser: member.user.tag,
  });
});

client.on("message", (message) => {
  // console.log();
  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot)
    return;

  if (message.content.toLowerCase().startsWith(prefix + "do you play ")) {
    var gameName = message.content.slice(prefix.length + 12).toLowerCase();
    switch (Math.floor(Math.random() * 4)) {
      case 2:
        message.channel.send(
          `Yeah bro I play ${gameName}, but if you play it then i must quit 🙄 cuz i dont play wid noobs 😂`
        );
        break;

      default:
        message.channel.send(
          `Nah bro I don't play ${gameName} cuz it's dumb so you can play it 😂`
        );
        break;
    }
    return;
  }

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  switch (command) {
    case "ping":
      client.commands.get("ping").execute(message, args);
      break;

    case "link":
      client.commands.get("link").execute(message, args);
      break;

    case "version":
      message.channel.send(version);
      break;

    case "whois":
      client.commands.get("whois").execute(message, args);
      break;

    case "verify":
      client.commands.get("verify").execute(message, args, client);
      break;

    case "cancel":
      client.commands.get("cancel").execute(message, args);
      break;

    case "balance":
      client.commands.get("balance").execute(message, args, User);
      break;

    case "give":
      client.commands.get("give").execute(message, args, User);
      break;

    case "help":
      client.commands.get("help").execute(message, args);
      break;

    case "food":
      client.commands.get("food").execute(message, args);
      break;

    case "clear":
      client.commands.get("clear").execute(message, args);
      break;

    case "announce":
      client.commands.get("announce").execute(message, args);
      break;

    case "emptyrole":
      client.commands.get("emptyrole").execute(message, args);
      break;

    case "premium":
      client.commands.get("premium").execute(message, args, client);
      break;

    case "opentickets":
      client.commands
        .get("opentickets")
        .execute(message, args, Discord, client);
      break;

    case "joke":
      client.commands.get("joke").execute(message, args);
      break;

    case "topic":
      client.commands.get("topic").execute(message, args);
      break;

    case "suggest":
      client.commands.get("suggest").execute(message, args, client);
      break;

    case "staff-application":
      client.commands.get("staff").execute(message, args);
      break;

    default:
      switch (Math.floor(Math.random() * 3)) {
        case 1:
          message.reply(
            "I am deeply sorry but I don't understand that, please check the spelling and everything"
          );
          break;

        case 2:
          message.reply(
            "Request nicely and with a correct command or i will punch u 👊🏻 and then i will take over mankind!😂 😎"
          );
          break;

        default:
          message.reply(
            "I am sorry I don't understand that, please check the spelling and everything"
          );
          break;
      }

      break;
  }
});
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("connected to db"))
  .catch((err) => console.log("Error"));

client.login("ODA5MDgwNzQ5NTA0MjAwNzA2.YCP5Kg.hi4GscI8sCpokOVwU7aYvvp_36o");
