const Discord = require('discord.js');

module.exports.run = async (bot, message) => {
  message.delete(5000)

    let help = new Discord.RichEmbed()
    .setColor('#FF8D29')
    .setTitle('Discord Server Rules')
    .setDescription('\n**1.** Post content in relevant channels, Especially bot interactions. Take these to #bots. Also, follow any channel-specific rules for ex. #nsfw for posting things that are not suitable/safe for work.\n'
      +"\n**2.** Do not post another member's personal information, Not without his/her permission.\n"
      +"\n**3.** Keep racism/hate speech out of the channels Be civil. That's all. Banter is fine — but within reason. Political/religious arguments are also fine — but not as a means to demean others.\n"
      +'\n**4.** Any attempt pornography (besides (#nsfw), gore, spam, malicious links. could result in a temp ban.\n'
      +'\n**5.** English only in chat. \n'
      +'\n**6.** Do not spam the chat or you will be punished (This includes all caps). First offense will result in a warning, followed by a mute, kick or ban.\n'
      +"\n**7.** Please foll the Discors TOS (Terms Of Service)\n")
    message.author.send(help);
}

module.exports.help = {
    name: "rules"
  }     