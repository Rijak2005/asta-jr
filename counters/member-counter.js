module.exports = async (client) => {
  //  This is Id pls replace in new server
  const guild = client.guilds.cache.get("814869735300268082");
  var people = 0;
  var bots = 0;
  var tPeople = 0;
  var tBots = 0;
  setInterval(() => {
    var peeps = guild.members.cache.toJSON();
    for (var guy of peeps) {
      guild.members.fetch(guy.userID).then((peep) => {
        // console.log(`${peep.}: ${peep.userbot}`);
        if (peep.user.bot) {
          tBots++;
        } else {
          tPeople++;
        }
      });
    }
    people = tPeople;
    tPeople = 0;
    bots = tBots;
    tBots = 0;
    const peepChannel = guild.channels.cache.get("815922102375940117");
    peepChannel.setName(`Peeps in Server 👦🏻: ${people.toLocaleString()}`);
    const botChannel = guild.channels.cache.get("840500872558542848");
    botChannel.setName(`Bots in Server 🤖: ${bots.toLocaleString()}`);
  }, 10000);
};
