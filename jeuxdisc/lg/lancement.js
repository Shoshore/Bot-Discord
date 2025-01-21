tblance =[0]
condirole = false
condigm = false
const Discord= require('discord.js')
module.exports = {
    name: 'lancement',
    description: 'role',
    execute(client, message, args) {
        if(message.author.id==tbgm[0]){
        if(tblance[0]==0 || condigm==true){
            message.channel.send('Tu fais la composition puis tu répartis les rôles (avec la commande puis tu relances cette commande)')
            tblance[0]=1 
            client.users.fetch(`${tbgm[0]}`).then(user => user.send("Voici comme les journée et la soirée du lg vont se dérouler!:\n Noctambule > voleur(1fois) > voyante > Ange(que au t2) > corbeau > joueur de flute > pyroman > enfant sauvage(1 fois) > garde > lg (en même temps petite fille) > lgnoir(1fois) > grand méchant loup(1tour sur deux)> lgb(1 tour sur deux)>sorcière > assassin > dictateur > chaman > Cupidon(1 fois que t1) > loup garou bavard (mot a donné)"))
        }//if tblance
    
    if(tblance[0]===1 && condirole===true){
        tblance[0]=2
        message.channel.send('La partie va débuté, attendez les instructions du game master !')
    }//if
    }else{
        message.channel.send(`${message.author}, tu n'as pas les permissions!!`)
    }//else
   
        }//execute
}//module