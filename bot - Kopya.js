const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const client = new Discord.Client();

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.tag} Adlı Kullanıcı Adı İle Giriş Yapıldı!`);
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Nazifcan') {
    msg.reply('Aaaaaa Nazifcan Burdamı?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
});

// Sunucuya Ekleme Linki
// https://discordapp.com/oauth2/authorize?client_id=507543905059864589&scope=bot&permissions=2146958847
// Sunucuya Ekleme Linki

client.login(ayarlar.token);