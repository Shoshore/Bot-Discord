tbdébut[0]=false
tbakitour[0]=-2
const Discord = require('discord.js');
module.exports = {
    name: 'stats',
    description: 'donne stats perso',
    execute(client, message, args) { 
    message.delete()
    condition=false
    for(let i in tbaut){
        let x =tbaut[i]
        if(x == message.author.id ){
            condition=true
        }//if     
    }//boucle
    if(condition){
        for(let i in tbaut){
            let x =tbaut[i]
            if(x == message.author.id ){
                if(tbdébut[0]==false || tbaut[tbakitour[0]]!=message.author.id){
                    if(tbdébut[0]==false){
                        message.channel.send(`${message.author}, calme la partie a pas commencer !!`)
                    }else{
                        message.channel.send(`${message.author}, c'est pas ton tour gros nul!`)
                    }//else
                }else{
                    const stats = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .attachFiles(['../discord bot/jeuxdisc/btr/piou.png'])
                                .setTitle('Ton perso')
                                .setURL('https://discord.js.org/')
                                .setAuthor('Piou', 'attachment://piou.png', 'https://discord.js.org')
                                .setDescription(`Les stats de ton personnage ${message.author} sont :>`)
                                .addFields(
                                    { name: `le personnage a était créé`, value: `${message.author}`, inline: false },
                                    { name: "l'attaque du personnage est:", value: `${tbat[i]}`, inline: false },
                                    { name: 'les points de vie du personnage sont:', value: `${tbhp[i]}`, inline: false },
                                    { name: `La position du personnage est`, value: `${tbposi[i]}`, inline: false }
                                    )
                                .setFooter("uwu", 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg');
            message.channel.send(stats)
            }//if          
        }//boucle
    }//else tour           
    }else{
        message.channel.send(`__Tu n'as pas de personnage ${message.author}__`)
    }//else    
}//execute
}//module