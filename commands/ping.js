// SupportBot, Created by Emerald Services
// Ping Command

const Discord = require("discord.js");
const fs = require("fs");

const yaml = require('js-yaml');
const supportbot = yaml.load(fs.readFileSync('./supportbot-config.yml', 'utf8'));

module.exports = {
    name: supportbot.PingCommand,
    description: supportbot.PingDesc,

    execute(message, args) {        
	if (supportbot.DeleteMessages) message.delete();
        
        let ping = Date.now() - message.createdTimestamp + " ms";
        
        const PingCommandEmbed = new Discord.MessageEmbed()
            .setDescription(`🏓 **Pong!** \`${Date.now() - message.createdTimestamp}ms\``)
            .setColor(supportbot.EmbedColour)

	    message.channel.send({ embeds: [PingCommandEmbed] });
    }
};
