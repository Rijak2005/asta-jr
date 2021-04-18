const Discord = require("discord.js");

const client = new Discord.Client();

const fs = require("fs");

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

client.on("guildMemberAdd", (member) => {
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
          text:
            "P.S. I can get a little toxic sometimes and I am sorry if I say something bad to you so don't mind and remember that I am a bot.",
        },
        color: 0x2ac7b1,
      },
    });
  });
});

client.on("message", (message) => {
  if (message.mentions.members.first()) {
    if (
      message.mentions.members.first().id === "539789850983923712" &&
      message.author.bot === false
    ) {
      message.guild.members.fetch("539789850983923712").then((asta) => {
        if (asta.presence.status === "offline") {
          message.reply(
            "Look dude ik you are a very big fan of astatine but he is not available rn so chill out and wait for him 😉"
          );
        } else {
          return;
        }
      });
    }
  }
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

client.login("ODA5MDgwNzQ5NTA0MjAwNzA2.YCP5Kg.hi4GscI8sCpokOVwU7aYvvp_36o");
