tblance = [0]
tbins2 = []
tbrole = []
tbrole2 = []
tbantix2 = []
const Discord= require('discord.js')
module.exports = {
    name: 'repart',
    description: 'attribut les roles',
    execute(client, message, args) {
        condiunuse = true
        if(message.author.id==tbgm[0]){
        if(tbrole.length>0){//tbrole.length==tbins.length
        if(tblance[0]===1 && condiunuse===true){
            message.delete()
            let longueur = tbrole.length
            longueur = longueur-1
       
            for(let _ in tbrole){
            let aleatoire = Math.round(Math.random()* (longueur-0)+0);
            add = tbrole[aleatoire]
            for(let i in tbrole2){
                    while(tbrole2[i]==add){
                        aleatoire = Math.round(Math.random()* (longueur-0)+0);
                        add = tbrole[aleatoire]
                        }//while
            }//for
            tbantix2.push(aleatoire)
            tbrole2.push(add)
        }//for 
        
        for(let i in tbins){
            messagerole = tbins[i]   
        try{
            client.users.fetch(`178450818620456960`).then(user => user.send(`La partie va comencé et tu es :${tbrole2[i]}`))//${messagerole}
        } catch (error) {
            console.error(`pb a cause dm fermé`)
            return message.channel.send(`Ouvre tes messages privés pour jouer @<${tbins[i]}>!! *Imbécile*`)
        }//catch
        }//for
        client.users.fetch(`178450818620456960`).then(user => user.send(`Tu es le game master donc tiens voici la liste des rôles au cas ou qu'il y aurait un problème 
        (ils sont dans les deux mêmes ordres):\n ${tbins2}\n ${tbrole2}`))//${tbgm[0]}
        condirole = true
        condiunuse = false
        message.channel.send('rôle répartie')
        }else{
            if(tblance[0]==0){
            message.channel.send(`Attends la partie n'a pas commencée ${message.author}`)
        }//if
        if(condiunuse==false){
            message.channel.send(`Tu ne peux faire qu'une fois cette commande!! Pour la refaire il faut reset la partie !`)
        }//if
        }//else
    }else{
        message.channel.send(`${message.author}, il y a ${tbrole.length} rôles et ${tbins.length} inscris, il faut le même nombre pour les deux!!`)
    }//else
    }else{
        message.channel.send(`Tu n'a pas les permissions!`)
    }//else
        }//execute
}//module