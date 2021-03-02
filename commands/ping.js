module.exports = {
  name: "ping",
  decription: "Ping pong command",
  execute(message, args) {
    message.channel.send("pong!");
  },
};
