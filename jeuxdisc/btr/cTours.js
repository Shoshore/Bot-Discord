akitour=-2
tourtable=0
tbakitour=[]
tbdébut=[]
conditionDébut = false
module.exports = {
    name: 'tour',
    description: 'dis le tour',
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
        if(args.join(' ')!='début' && args.join(' ')!='fin'){
            message.channel.send(`**${message.author}, après .tour tu fais espace fin**`)
        }else{
            if(args.join(' ')=='début'){
                if(message.author.id=='178450818620456960'){
                akitour=0
                message.channel.send(`La partie commence et nous commençons par le tour de <@${tbaut[akitour]}>`)
                conditionDébut=true
            }else{
                message.channel.send(`Nananana tu as pas les perms ${message.author}`)
            }//else               
            }//if

            conditionfintour=true
            for(let y in tbposi){
                if(tbposi[y]==tbposi[i] && y!=i){
                    message.channel.send(`*${message.author}, sois tu combat soit tu fuis tu peux pas passer ton tour pfeuh!*`)
                    conditionfintour=false
                }//if tbposi
                }//for
            if(conditionfintour){
            if(args.join(' ')=='fin' && conditionDébut!=false){
                if(tbaut[akitour]==message.author.id){
                akitour=akitour+1
                let pp=tbaut.length
                if(akitour>pp-1){
                    akitour=0
                    tourtable=tourtable+1
                    message.channel.send(`**__fin du ${tourtable} tour de table!__**`)
                }//if
                message.channel.send(`**====================================================================**\n 
----------->__**C'est le tour de <@${tbaut[akitour]}>**__<-----------\n
**====================================================================**`)
            }else{
                message.channel.send(`__${message.author}, d'ou tu essaie de skip un tour qui n'es pas le tiens. Pfeuh rentre chez toi__`)
            }
        }//if condi et args join
        }//if
        tbakitour[0]=akitour
        tbdébut[0]=conditionDébut
    }//else
    }
}//for aut
}else{
    message.channel.send(`*${message.author}, tu n'as pas de personnage*`)
}
    }//execute
}//module