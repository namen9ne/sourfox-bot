const Discord = require('discord.js');

module.exports.run = async (bot, message) => {
  message.delete(5000)
    message.channel.send('please check your dms!')

    let help = new Discord.RichEmbed()
    .setColor('#FF8D29')
    .setTitle('All commands avaliable for members.')
    .setDescription('__**My commands are:**__\n' 
      +';help | displays a list of commands\n'
      +';spank @user | spanks @user \n'
      +";rules | give a list of the discord server rules\n"
      +";srules | gives a list of the unturned server rules\n"
      +';stats | gives you the server status\n')


    message.author.send(help);
}

module.exports.help = {
    name: "help"
  }       