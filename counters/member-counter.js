module.exports = async (client) => {
  //  This is Id pls replace in new server
  const guild = client.guilds.cache.get("814869735300268082");
  setInterval(() => {
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get("815922102375940117");
    channel.setName(`Peeps in Server 👦🏻: ${memberCount.toLocaleString()}`);
  }, 6000);
};
