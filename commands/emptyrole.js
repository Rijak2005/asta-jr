module.exports = {
    name: "emptyrole",
    decription: "emptyrole command",
    execute(message, args) {
        if (`${message.author.id}` !== "539789850983923712") {return;}
        var role = message.mentions.roles.first();
        // console.log(role)
        peopleInRole = role.members.toJSON();
        for (var guy of peopleInRole) {
            message.guild.members.fetch(guy.userID)
            .then(peep => {
                peep.roles.remove(role.id);
            });
        }
        // console.log(peopleInRole);
    },
  };