tbins = []
tblance = [0]
tbins2 = []
condigm = false
tbgm = []
const Discord= require('discord.js')
module.exports = {
    name: 'inscription',
    description: 'inscription',
    execute(client, message, args) {
        message.delete()
        if(condigm==false){//true
        if(tblance[0]==0){
        conditionins = true
        for(let i in tbins){
        if(tbins[i] == message.author.id ){
        message.channel.send('Tu es déjà inscri*e*')
        conditionins = false
        }//if
        }//for
        if(conditionins){
            if(message.author.id!=tbgm[0]){
            tbins.push(message.author.id)
            tbins2.push(message.author)
            message.channel.send(`${message.author}, ok cela fera 10€(tu as bien été inscri*e*)`)
        }else{
            message.channel.send('Tu es le/la game master tu ne peux donc pas jouer!')
        }//else
        }//if condi
        }else{
            message.channel.send(`La parti à déjà commencé, tu dois attends la prochaine! *désolé*`)
            }//Else
        }else{
            message.channel.send("Vous devez choisir d'abords un*e* game master")
        }//else
        }//execute
}//module