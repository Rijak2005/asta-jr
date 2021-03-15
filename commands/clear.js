module.exports = {
  name: "clear",
  decription: "clear command",
  execute(message, args) {
    if (args[0]) {
      message.channel.bulkDelete(parseInt(args[0]) + 1);
    } else {
      message.delete();
    }
  },
};
