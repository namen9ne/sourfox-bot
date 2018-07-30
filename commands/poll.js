// ;poll <poll info>
const Discord = require("discord.js");

exports.run = async (client, message, args, tools) => {

  //permission Verification
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the perm; ADMINISTRATOR');

  if (!args[0]) return message.send.channel('Proper Usage: <prefix>poll question');

  //embed
  const embed = new Discord.RichEmbed()
     .setColor('#FF8D29')
     .setFooter('React to vote.')
     .setDescription(args.join(' '))
     .setTitle(`Poll Created By ${message.author.username}`);

  let msg = await message.channel.send(embed);

  //react
  await msg.react('✅');
  await msg.react('❌');

  message.delete({timeout: 1000});
  }
  module.exports.help = {
    name: "poll"
};
