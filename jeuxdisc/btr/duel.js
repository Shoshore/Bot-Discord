tbdébut[0]=false
tbakitour[0]=-2
const Discord = require('discord.js');
module.exports = {
    name: 'duel',
    description: 'le duel',
    execute(client, message, args) {
        message.delete()
        condition = false
        for(let i in tbaut){
            let x =tbaut[i]
            if(x == message.author.id ){
                condition=true
            }  //if    
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
                    let conditionduel=true
                    for(let y in tbposi){
                        if(tbposi[y]==tbposi[i] && y!=i){
                        let dat1 = tbat[i]
                        let dat2 = tbat[y]
                        let dhp1 = tbhp[i]
                        let dhp2 = tbhp[y]
                        let tour1 = 0
                        let tour2 = 0
                        if(dat2<=0 || dat1<=0){
                        if(dat2<0 && dat1<0){
                            dat2= dat2*-1
                            dat1= dat1*-1
                            if(dat1<dat2){
                                let change = dat1
                                dat1=dat2
                                dat2=change
                            }else{
                                let change = dat2
                                dat2=dat1
                                dat1=change
                            }//else                        
                        }//if dat 1 et 2 <0
                        if(dat1<=0){
                            dat1=0.1
                        }//if
                        if(dat2<=0){
                           dat2=0.1
                        }//if
                    }//if
                        while(dhp2>0){
                            dhp2 = dhp2 - dat1
                            tour1 = tour1 +1
                        }//while
                        while(dhp1>0){
                            dhp1 = dhp1 - dat2
                            tour2 = tour2 +1
                        }//while
                        let victoire
                        let mort
                        if(tour1<=tour2){
                            victoire = message.author.id
                            mort = tbaut[y]
                            tbat[i]=tbat[i]+3
                            tbhp[i]=tbhp[i]+5,5
                        }else{
                            victoire = tbaut[y]
                            mort = message.author.id
                            tbat[y]=tbat[y]+3
                            tbhp[y]=tbhp[y]+5,5
                        }//else
                    const ResultDuel = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Résultat du duel')
                                .setURL('https://discord.js.org/')
                                .attachFiles(['../discord bot/jeuxdisc/btr/piou.png'])
                                .setAuthor('Piou', 'attachment://piou.png', 'https://discord.js.org')
                                .setDescription(`Voici le résultat du duel opposant <@${message.author.id}> et <@${tbaut[y]}>`)
                                .addFields(
                                    { name: `Le premier sité`, value: "Stats:", inline: false },
                                    { name: 'Attaque :', value: `${tbat[i]}`, inline: true },
                                    { name: 'Point de vie', value: `${tbhp[i]}`, inline: true },
                                    { name: `Le deuxième`, value: `Stats`, inline: false },
                                    { name: 'Attaque', value: `${tbat[y]}`, inline: true },
                                    { name: 'Point de vie', value: `${tbhp[y]}`, inline: true },
                                    { name: 'Le vainqueur du Duel est :', value: `<@${victoire}>, <@${mort}> est décédé`, inline:false}
                                    )
                                .setFooter("Alors bien combattu ?", 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg');
                                message.channel.send(ResultDuel)

                        const deleteat1 = tbat.indexOf(i);
                        const deletehp1 = tbhp.indexOf(i);
                        const deleteaut1 = tbaut.indexOf(i);
                        const deleteposi1 = tbposi.indexOf(i);

                        const deleteat2 = tbat.indexOf(y);
                        const deletehp2 = tbhp.indexOf(y);
                        const deleteaut2 = tbaut.indexOf(y);
                        const deleteposi2 = tbposi.indexOf(y);
                        if(victoire==message.author.id){
                            tbat.splice(deleteat2,  1)
                            tbhp.splice(deletehp2,  1)
                            tbaut.splice(deleteaut2,    1)
                            tbposi.splice(deleteposi2,  1)
                        }else{
                            tbat.splice(deleteat1,  1)
                            tbhp.splice(deletehp1,  1)
                            tbaut.splice(deleteaut1,    1)
                            tbposi.splice(deleteposi1,  1)
                        }//else
                            conditionduel=false
                            
                        }//if(tbposi)
                        }//boucle let y
                        if(conditionduel){
                            message.channel.send(`**${message.author} Non mais y'a personne a prendre en duel ou tu es.**`)
                        }//ifcondi duel
                    }//else
                }//if(x==message.author.id)
            }//boucle
    }else{
        message.channel.send("Tu pense pouvoir combatre avec quoi ? Tu n'as pas de perso pfeuh")
    }//else
}//excute
}//module