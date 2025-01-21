const Discord= require('discord.js')
module.exports = {
    name: 'gm',
    description: 'gm',
    execute(client, message, args) {
        message.delete()
        condigm = false
        tbgm=[]       
        tbgm.push(args[0])
        conditionpass= true
        let test1 = tbgm[0]
        if(isNaN(test1)){
            conditionpass = false
        }
        if(conditionpass){
        try{
            client.users.fetch(`${tbgm[0]}`).then(user => user.send("Test, ne pas répondre a se message pour voir si il n'y aura aucun bug pour envoyer un message au game master"))
            message.channel.send(`Le gamer master est : <@${tbgm[0]}>`)
            condigm = true
        }catch (error){
            console.error(`pb a cause dm fermé/arg invalid`)
            return message.channel.send(`L'argument donnée n'es pas un id existant d'un compte discord ou ses mp sont fermées`)
        }//catch
    }else{
        tbgm = []
        message.channel.send("Il faut envoyer l'id de la personne (discord develloper requis)")
    }//else
    }//execute
}//module
