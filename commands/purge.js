const Discord = require("discord.js");
const errors = require("../utils/errors.js");

// ;purge <amount>

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("please specify an amount | ;purge <amount>");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Purged ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "purge"
}
