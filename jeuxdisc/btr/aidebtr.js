const Discord = require('discord.js');
module.exports = {
    name: 'aidebtr',
    description: "bas l'aide du btr",
    execute(client, message, args) {
	const aidebtr = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Aide du battle royale')
	.setURL('https://discord.js.org/')
	.setAuthor('Piou', 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg', 'https://discord.js.org')
	.setDescription(`Description de chaque commandes du battle royale demandais par ${message.author}:`)
	.setThumbnail('https://cdn.discordapp.com/attachments/707993253625987142/711154737030103070/Screenshot_372.png')
	.addFields(
		{ name: '?creation', value: 'Créer le personnage' },
        { name: '?tour fin (ou début)', value: "Sans .tour début on peux pas joeur et .tour fin pour finir son jeux" },
        { name: '?duel', value: "si y'a qql sur la même case que vous, vous battez et le perdant meurt le gagnant gagne des stats" },
        { name: '?fuite "direction" ', value: "si y'a qql sur la même case que vous, vous pouvez fuir de 2 cases direction = droite/haute/bas/gauche " },
		{ name: '?mouvement (direction)', value: "vous bougez de une case direction= droite/haut/bas/gauche" },
        { name: '?map', value: "Affiche la map (pour des soucis de lourdeur on la mettra que a la fin de chaque tour de table que par le staff)"},
        { name: '?reset ', value: "Recommence la partie que pour le staff" },
        { name: '?stats" ', value: "Affiche vos hp et votre attaque mais aussi votre pisition" }
	)
	.setFooter("Alors cela t'aide?", 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg');
message.delete()
message.channel.send(aidebtr);
}//execute
}//module
