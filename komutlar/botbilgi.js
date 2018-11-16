const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Bot Adı:', 'YKO')
    .addField('Tür: ', 'Bot Bilgi')
    .addField('Talep Eden:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Ekip:', '<@355742603691687937> => **Yapımcı** \n <@491197444676124682> => **Bot & Ekip Yöneticisi**');
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['i','botinfo'],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'Bot Hakkında Bilgi Verir.',
  usage: 'botbilgi'
};