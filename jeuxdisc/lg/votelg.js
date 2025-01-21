tbins2 = []
tblance = [0]
tbgm = []
const Discord= require('discord.js')
module.exports = {
    name: 'votelg',
    description: 'inscription',
    execute(client, message, args) {
        if(message.author.id==tbgm[0]){
        if(tblance[0]===2){
            message.channel.send(`Voici le vote du village: \n pour voter utiliser l'emote :one: svp :"`)
        for(let yo in tbins){
            let msgx = tbins[yo]
            message.channel.send(`--><@${msgx}>`)
        }//for
        setTimeout(function(){ 
            message.channel.send(`le temps est écoulé `)
        }, 120000)
        setTimeout(function(){ 
            client.users.fetch(`${tbgm[0]}`).then(user => user.send(`Envoie un message au mentaliste (s'il y'en a un) si le vote se déroule bien ou non`))
        }, 60000)
        setTimeout(function(){ 
            message.channel.send(`il reste 10secondes `)
        }, 110000)
    }else{
        message.channel.send("Attends la partie n'a pas commencée")
    }//else
}else{
    message.channel.send("Tu n'as pas les permissions")
}//else
        }//execute
}//module