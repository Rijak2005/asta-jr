module.exports = {
    name: 'opentickets',
    description: "opens tickets",
    async execute(message, args, Discord, client) {
        const channel = '828891794585550869';
        const triviaNighter = message.guild.roles.cache.find(role => role.id === "833250151057457162");
        const tourneyParticipant = message.guild.roles.cache.find(role => role.id === "832581957833326684");
        const emoji = '🎫';
        var count = 0;
        if(!args[0]){
            message.channel.send("No event specified")
            return;
        }
        if (args[0]!="trivia"&&args[0]!="tournament") {
            message.channel.send("Invalid event!")
            return;
        }
        let embed = new Discord.MessageEmbed()
            .setColor(args[0]==="trivia"?'#fe019a':'00BAF1')
            .setTitle(args[0]==="trivia"?`Hey guys! Giving tickets for today's trivia night!`: "Hey guys! Giving tickets for today's tournament!")
            .setDescription(`To get a ticket tap on the ticket below and then type:
            pls give 600 @Mr.Astatine
            
            **Extra Donors will be shouted out in the event!**
            (To donate give me any amount of DMC in #🎭bad-memes🎭 )
            
            Thank You
            Astatine :heart:`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(emoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (count<=25){
                if (reaction.message.channel.id == channel) {
                    if (args[0]==="trivia") {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(triviaNighter);
                    } else if (args[0]==="tournament"){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(tourneyParticipant);
                    }
                    count++
                } else {
                    return;
                }
            } else{
                reaction.users.remove(user.id);
                client.users.cache.get(user.id).send("Broo You cant enter the event cuz 25 people have entered before you");
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (args[0]==="trivia") {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(triviaNighter);
                }
                if (args[0]==="tournament") {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(tourneyParticipant);
                }
                count--;
            } else {
                return;
            }
        });
    }
 
} 