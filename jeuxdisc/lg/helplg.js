const Discord = require('discord.js');
module.exports = {
    name: 'aidelg',
    description: "bas l'aide du lg",
    execute(client, message, args) {
	const aidelg = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Aide du lg')
	.setURL('https://discord.js.org/')
	.setAuthor('Piou', 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg', 'https://discord.js.org')
	.setDescription(`Description de chaque commandes du lg:`)
	.setThumbnail('https://cdn.discordapp.com/attachments/707993253625987142/711154737030103070/Screenshot_372.png')
	.addFields(
		{ name: '.inscription', value: "t'incris au lg" },
        { name: '.gm "id du game master"', value: "A faire avant l'incription! Cela choisis le game master." },
        { name: '.lancement', value: "A faire une fois après que toute le monde sois inscrit et après avoir reparti les rôles!" },
        { name: '.reparte', value: "Répartir les rôles de composition faite!" },
        { name: '.compo "nom du rôle"', value: "Pour cette commande on ajoute des rôles, certains comme le joueur de flûte, pour les ajoutés il faut juste tout collé sans majuscule : joueurdeflûte"},
        { name: '.compo liste', value: "Donne la liste de la composition actuelle!" },
        { name: '.compo efface', value: "Efface la composition actuelle (contrérement a .resetlg)" },
        { name: '.resetlg', value: "Rénitialise la partie! (sauf la composition)" },
        { name: '.votelg', value: "Envoie un premier message que le vote du jour du village commence et 45secodnes après indique sa fin! (envoie un message a 10secondes de la fin)" },
	)
	.setFooter("Alors cela t'aide?", 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg');
message.delete()
message.channel.send(aidelg);
}//execute
}//module