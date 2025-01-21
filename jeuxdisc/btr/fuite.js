tb1foistourfuite = [0]
tbdébut[0]=false
tbakitour[0]=-2
module.exports = {
    name: 'fuite',
    description: 'mvt',
    execute(client, message, args) {
message.delete()
condition=false
for(let i in tbaut){
    let x =tbaut[i]
    if(x == message.author.id ){
        condition=true
    }//if    
}//for
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
                conditionfuite=false
                for(let y in tbposi){
                    if(tbposi[y]==tbposi[i] && y!=i){
                        conditionfuite=true
                    }//if
                }//boucle
if(conditionfuite){

     //test pas hors map
    conditiondirection=4
    //bas
        conditionbas=true
        if(args.join(' ')=='bas'){
        let x = tbposi[i]
        x=x-20
        if(x<0){
        message.channel.send(`${message.author} fuit et arrive dans le fond du gouffre`)
            conditionbas=false
            conditiondirection= conditiondirection-1
        }}//if
    //haut
        conditionhaut=true
        if(args.join(' ')=='haut'){
        let x = tbposi[i]
        x=x+20
        if(x>100){
            message.channel.send(`tu ne peux pas aller plus haut ${message.author}, ou le soleil va te bruller!`)
            conditionhaut=false
            conditiondirection= conditiondirection-1
        }}//if
    //droite
        conditiondroite=true
        if(args.join(' ')=='droite'){
        let x = tbposi[i]
        x=x+2
        if(x==10 || x==11 || x==20 || x==21 || x==30 || x==31 || x==40 || x==41 || x==50 || x==51 || x==60 || x==61 
            || x==70 || x==71 || x==80 || x==81 || x==90 || x==91 || x>100){
            message.channel.send(`tu ne peux pas aller plus à droite ${message.author}`)
            conditiondroite=false
            conditiondirection= conditiondirection-1
        }}//if
    //gacuhe
        conditiongauche=true
        if(args.join(' ')=='gauche'){
        let x = tbposi[i]
        x=x-2
        if(x<0 || x==9 || x==8 || x==19 || x==18 || x==29 || x==28 || x==39 || x==38|| x==49 || x==48 || x==59 || x==58 
            || x==69 || x==68 || x==79 || x==78 || x==89 || x==88){
            message.channel.send(`tu ne peux pas aller plus à gauche ${message.author}`)
            conditiongauche=false
            conditiondirection= conditiondirection-1
        }}//if
        if(conditiondirection==4){
                    if(args.join(' ') == "gauche" || args.join(' ') == 'droite' || args.join(' ') == 'haut' || args.join(' ') == 'bas'){
                        if(message.author.id==tb1foistourfuite[0]){
                            message.channel.send(`${message.author}, tu as déjà fuis une fois passe ton tour(ou tu fight si y'a quelqu'un)!`);
                        }else{
                        const index1foistour = tb1foistourfuite.indexOf(0);
                        tb1foistourfuite.splice(index1foistour, 1);
                        tb1foistourfuite.push(message.author.id);
        //bas                
if(args.join(' ') == 'bas'){

if(conditionbas){
    let x = tbposi[i]
    x=x-20
    tbposi[i]=x
    conditionbas=true

    for(let y in tbposi){
        if(tbposi[y]==x && y!=i){
            message.channel.send(`${message.author} fuit trébuche, léve la tête et vois <@${tbaut[y]}>\n C'est l'heure DUDUDUDUEL`)
            conditionbas=false
        }//if
        }//for

        if(conditionbas){
            message.channel.send(`${message.author} fuit et constate qu'il ni a personne`)
        }//ifcondi
    }//if condi bas 
}//if bas

        //haut
if(args.join(' ') == 'haut'){
    if(conditionhaut){
    let x = tbposi[i]
    x=x+20
        tbposi[i]=x
        conditionhaut=true
        for(let y in tbposi){
            if(tbposi[y]==x && y!=i){
                message.channel.send(`${message.author} prends la fuite lui fit trouvé <@${tbaut[y]}>\n Seule option et de le tuer`)
                conditionhaut=false
            }//if
            }//for
        if(conditionhaut){
                message.channel.send(`${message.author} fuit et trouve personne`)
            }//if condi haut
        }//if conditon
}//if haut

//droite
if(args.join(' ') == 'droite'){
    if(conditiondroite){
let x = tbposi[i]
x=x+2
    tbposi[i]=x
    conditiondroite=true
    for(let y in tbposi){
        if(tbposi[y]==x && y!=i){
            message.channel.send(`${message.author} en fuiant heurte <@${tbaut[y]}>\n Le duel commence :o`)
            conditiondroite=false
        }//if
        }//for
        if(conditiondroite){   
            message.channel.send(`${message.author} dans sa fuite il trouve le vide fais lui la discussion`)
        }//if condi
}//if condition droite
}//ifdroite

//gauche
if(args.join(' ') == 'gauche'){
    if(conditiongauche){
    let x = tbposi[i]
    x=x-2  
        tbposi[i]=x
        conditiongauche=true
        for(let y in tbposi){
            if(tbposi[y]==x && y!=i){
                message.channel.send(`${message.author} fais un speed run tell déjà vu vers la gauche et arrive devant <@${tbaut[y]}>\n 
                Un duel s'impose`)
                conditiongauche=false
            }//if
            }//for
        if(conditiongauche){
        message.channel.send(`${message.author} le vent apparait comme la seule personne ici`)
    }// if condi
    }//if condition gauche 
    }// if gauche

    }//else x2
    }else{
        message.channel.send(`cette direction de fuite n'existe pas ${message.author}`)
    }//else
    }//if condi 4
        }else{
            message.channel.send(`N'on mais tu sais tu peux pas fuir si il y a personne, espèce de patate ${message.author}`)
        }//else           
    }//else           
}//if x
    }//for aut
}else{
    message.channel.send(`Tu n'as pas de personnage ${message.author}`)
}//else    
}//execute
}//module