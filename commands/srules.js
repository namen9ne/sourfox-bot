const Discord = require('discord.js');

module.exports.run = async (bot, message) => {
  message.delete(5000)

    let help = new Discord.RichEmbed()
    .setColor('#FF8D29')
    .setTitle('Unturned Server Rules')
    .setDescription('\n**1.** Respect Staff Member and others on the server. Punishable by Admin or Mods choice.\n'
      +'\n**2.** Only English in Global chat. You may talk in any other language in Group, Local or Voice Chat. First offense will result in a warning, followed by a kick or ban.\n'
      +'\n**3.** No racist, pornographic, drug, political, or religious talk in public chat. Punishable by warning or ban.\n'
      +'\n**4.** Do not spam the chat or you will be punished (This includes all caps). First offense will result in a warning, followed by a mute, kick or ban.\n'
      +'\n**5.** Do not advertise. This includes advertisement of other servers, services etc. However Twitch and Youtube is fine with the permission of the Owner or Staff. First offense will result in a warning, followed by a kick or ban.\n'
      +'\n**6.** Do not use any third party program or any form of modification that gives you an unfair advantage (This includes spy-protection). Hacking will result in a PERMANENT ban.\n'
      +"\n**7.** You are responsible for your account security. If your friend, dog, cat, mother, son, cousin, etc. logs onto your account and gets you banned, it's still your fault and you won’t get unbanned.\n"
      +"\n**8.** No excessive insults, threats offensive language. Mild banter is acceptable. Punishable by a warning, followed by a mute, kick or ban.\n"
      +"\n**9.** No racial slurs, religious slurs or any form of offensive stereotypes talk in chat.\n"
      +"\n**10.** Do not ask admins for items. Punishable by warning, followed by a kick or ban.\n"
      +"\n**11.** Do not avoiding being killed, muted, slayed, gagged, silenced, banned or punished by an admin in any way. Punishable by warning, kick, or ban.\n"
      +"\n**12.** Player names with offensive language are forbidden, Punishable by warning, followed by a kick or ban.\n"
      +"\n**13.** Abusing glitches is forbidden. Will result in a punishment depending on the severity of the glitch used. Punishable by a kick or ban.\n"
      +"\n**14.** Any form of player or staff impersonation is strictly forbidden. Punishable by Admin or Mods choice.\n")
    message.author.send(help);
}

module.exports.help = {
    name: "srules"
  }       