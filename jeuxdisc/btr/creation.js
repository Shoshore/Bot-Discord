tbaut = []
tbat =[]
tbhp = []
tbposi =[]
tbanti = []
tbakitour=[-2]
const Discord = require('discord.js');
module.exports = {
    name: 'creation',
    description: 'authentification',
    execute(client, message, args) {
    message.delete()
    if(tbakitour[0]==-2){
    conditionanti=true
    for(let n in tbanti){
        if(tbanti[n]==message.author.id){
            conditionanti=false
        }//if
    }//else
    if(conditionanti){
    condition=false
    for(let i in tbaut){
        let x =tbaut[i]
        if(x == message.author.id ){
            condition=true
        }//if
    }//for
        if(condition){
            message.channel.send(`${message.author} tu as déjà un personnage!`)
        }else{
            tbaut.push(message.author.id)
            tbanti.push(message.author.id)
            xat=5
            xhp=10
            xposi = Math.round(Math.random()* (99-0)+0)
            while(xposi== 72|| xposi == 73 || xposi == 74 || xposi == 75 || xposi == 76 || xposi == 77
                || xposi == 62|| xposi == 63 || xposi == 64 || xposi == 65 || xposi == 66 || xposi == 67
                || xposi == 52|| xposi == 53 || xposi == 54 || xposi == 55 || xposi == 56 || xposi == 57
                || xposi == 42|| xposi == 43|| xposi == 44|| xposi == 45|| xposi == 46|| xposi == 67
                || xposi == 32|| xposi == 33|| xposi == 34|| xposi == 35|| xposi == 36|| xposi == 37
                || xposi == 22 || xposi == 23 || xposi == 24 || xposi == 25 || xposi == 26 || xposi == 27){
                    xposi = Math.round(Math.random()* (99-0)+0)
                }
            tbat.push(xat)
            tbhp.push(xhp)
            tbposi.push(xposi)
            let taille = tbaut.length;
            const perso = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .attachFiles(['../discord bot/jeuxdisc/btr/piou.png'])
                                .setTitle('Ton perso')
                                .setURL('https://discord.js.org/')
                                .setAuthor('Piou', 'attachment://piou.png', 'https://discord.js.org')
                                .setDescription(`Voici ton personnage <@${message.author.id}>`)
                                .addFields(
                                    { name: `le personnage a était créé`, value: `${message.author}`, inline: false },
                                    { name: "l'attaque du personnage est:", value: `${tbat[taille-1]}`, inline: false },
                                    { name: 'les points de vie du personnage sont:', value: `${tbhp[taille-1]}`, inline: false },
                                    { name: `La position du personnage est`, value: ` ${tbposi[taille-1]}`, inline: false }
                                    )
                                .setFooter("uwu", 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg');
            message.channel.send(perso)
        }//else
        }else{
            message.channel.send(`**${message.author}, tu as déjà fait un perso pour cette partie attend la prochaine !**`)
        }//else
    }else{
        message.channel.send(`__${message.author}, la partie à déjà commencer désolé!!__`)
    }     
    }//execute
}//module