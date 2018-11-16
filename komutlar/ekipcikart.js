const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var guildID = "511881353025814528";
	var channelID = "512683435685445632";
	var kullanici = args.slice(0).join(' ');

	if (!kullanici){
		return message.reply("Bir mesaj belirt! Doğru kullanım: **y!ekip-cikart <@User>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "YKO - Ekibinden Çıkartma")
			.addField("Kullanıcı:", kullanici)
			.addField("Yetkili:", message.author.tag)
			.addField("ID", message.author.id)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send(":outbox_tray: Başarılı Bir Şekilde Kullanıcı Ekipten Çıkartıldı! :outbox_tray:");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ekip-cikart"], 
  permLevel: 4
};

exports.help = {
  name: 'ekip-cikart', 
  description: "YKO - Ekibinden Kullanıcıyı Çıkarır.", 
  usage: 'ekip-cikart <@User>' 
};