const Discord = require('discord.js');
module.exports = {
    name: 'aide',
    description: "bas l'aide des command",
    execute(client, message, args) {
	const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Aide')
	.setURL('https://discord.js.org/')
	.setAuthor('Piou', 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg', 'https://discord.js.org')
	.setDescription(`Description de chaque commandes demandais par ${message.author}:`)
	.setThumbnail('https://cdn.discordapp.com/attachments/707993253625987142/711154737030103070/Screenshot_372.png')
	.addFields(
        { name: '.vote', value: "fait un vote il faut réagir avec une emote de 1 à 10 et le bot fait le reste" },
        { name: '.aide', value: "cette commande" },
		{ name: '.ping', value: "la latence du bot" },
		{ name: '.aidebtr', value: "l'aide du jeux battle royale" },
		{ name: '.aide', value: "l'aide du des commandes pour la musique" }
	)
	.setFooter("Alors cela t'aide?", 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg');
message.delete()
message.channel.send(exampleEmbed);
}
}
