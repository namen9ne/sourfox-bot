const Discord = require("discord.js");

//;spank @user

module.exports.run = async (bot, message, args) => {
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  message.delete(5000);
  message.channel.send(`<@${wUser.id}>` + " has been spanked by " + `<@${message.author.id}>`);
}

module.exports.help = {
  name: "spank"
}       