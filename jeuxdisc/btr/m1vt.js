let atrib81 = 1
let atrib84 = 1
let atrib85 = 1
let atrib88 = 1
let atrib72 = 1
let atrib74 = 1
let atrib75 = 1
let atrib77 = 1
let atrib63 = 1
let atrib64 = 1
let atrib65 = 1
let atrib66 = 1
let atrib51 = 1
let atrib52 = 1
let atrib53 = 1
let atrib54 = 1
let atrib55 = 1
let atrib56 = 1
let atrib57 = 1
let atrib58 = 1
let atrib48 = 1
let atrib47 = 1
let atrib46 = 1
let atrib45 = 1
let atrib44 = 1
let atrib43 = 1
let atrib42 = 1
let atrib41 = 1
let atrib33 = 1
let atrib34 = 1
let atrib35 = 1
let atrib36 = 1
let atrib22 = 1
let atrib24 = 1
let atrib25 = 1
let atrib27 = 1
let atrib11 = 1
let atrib14 = 1
let atrib15 = 1
let atrib18 = 1
let atrib82 = 1
let atrib87 = 1
let atrib71 = 1
let atrib78 = 1
let atrib28 = 1
let atrib17 = 1
let atrib12 = 1
let atrib21 = 1
tbatrib=[]
tb1foistour=[0]
tbdébut[0]=false
tbakitour[0]=-2
aleatoire = Math.round(Math.random()* (5-0)+0)
module.exports = {
    name: 'mvt',
    description: 'mouvement',
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
                conditiondéplcament=true
        for(let deplace in tbposi){
            if(tbposi[deplace]==tbposi[i] && deplace!=i){
                conditiondéplcament=false
            }//if
        }//for
        //test pas hors map
        conditiondirection=4
        conditionbas=true
        if(args.join(' ')=='bas'){
        let x = tbposi[i]
        x=x-10
        if(x<0){
        message.channel.send(`${message.author} est arrivé dans le fond du gouffre`)
            conditionbas=false
            conditiondirection= conditiondirection-1
        }}//if
        conditionhaut=true
        if(args.join(' ')=='haut'){
        let x = tbposi[i]
        x=x+10
        if(x>100){
            message.channel.send(`tu ne peux pas aller plus haut ${message.author}, ou le soleil va te bruller!`)
            conditionhaut=false
            conditiondirection= conditiondirection-1
        }}//if
        conditiondroite=true
        if(args.join(' ')=='droite'){
        let x = tbposi[i]
        x=x+1
        if(x==10 || x==20 || x==30 || x==40 || x==50 || x==60 || x==70 || x==80 || x==90 || x==100){
            message.channel.send(`tu ne peux pas aller plus à droite ${message.author}`)
            conditiondroite=false
            conditiondirection= conditiondirection-1
        }}//if
        conditiongauche=true
        if(args.join(' ')=='gauche'){
        let x = tbposi[i]
        x=x-1
        if(x<0 || x==9 || x==19 || x==29 || x==39 || x==49 || x==59 || x==69 || x==79 || x==89){
            message.channel.send(`tu ne peux pas aller plus à gauche ${message.author}`)
            conditiongauche=false
            conditiondirection= conditiondirection-1
        }}//if
        if(conditiondirection==4){
        if(conditiondéplcament){
                if(args.join(' ') == "gauche" || args.join(' ') == 'droite' || args.join(' ') == 'haut' || args.join(' ') == 'bas'){
                    if(message.author.id==tb1foistour[0]){
                        message.channel.send(`${message.author}, tu as déjà bouger une fois passe ton tour!`);
                    }else{
                    const index1foistour = tb1foistour.indexOf(0);
                    tb1foistour.splice(index1foistour, 1);
                    tb1foistour.push(message.author.id);
    //bas                
    if(args.join(' ') == 'bas'){
    
    if(conditionbas){
        x = tbposi[i]
        x=x-10
        tbposi[i]=x
        conditionbas=true
        for(let y in tbposi){
            if(tbposi[y]==x && y!=i){
                message.channel.send(`${message.author} descends en rapel et tombe nez à nez avec <@${tbaut[y]}>\n 
                Un petit duel et tu fuis encore ... ?`)
                conditionbas=false
            }//if
            }//for
            if(conditionbas){
                message.channel.send(`${message.author} loupe un marche et constante qu'il n'y a personne`)
            }//if       
    }//if condi
    }//if

    //haut
    if(args.join(' ') == 'haut'){
        if(conditionhaut){
            x = tbposi[i]
            x=x+10
            tbposi[i]=x
            conditionhaut=true
            for(let y in tbposi){
                if(tbposi[y]==x && y!=i){
                    message.channel.send(`${message.author} monte avec son chapeau hélisse et trouve <@${tbaut[y]}>\n
                    1v1 cs go ou tu te défile ? `)
                    conditionhaut=false
                }//if tbposi
                }//for
            if(conditionhaut){
                    message.channel.send(`${message.author} grimpe sur une corde et personne n'apparait`)
                }//if           
    }//conditi haut if
    }//ifhaut

    //droite
    if(args.join(' ') == 'droite'){
    if(conditiondroite){
    x = tbposi[i]
        x=x+1
        tbposi[i]=x
        conditiondroite=true
        for(let y in tbposi){
            if(tbposi[y]==x && y!=i){
                message.channel.send(`${message.author} bifurque à droite et heurte <@${tbaut[y]}>\n 
                1v1 gare du nord ou poule mouillée ?`)
                conditiondroite=false
            }//if
            }//for
            if(conditiondroite){   
                message.channel.send(`${message.author} braque a droite se mange un arbre et trouve personne`)
            }//if
    }//if condi
    }//if droite

    //gauche
    if(args.join(' ') == 'gauche'){    
        if(conditiongauche){
            x=tbposi[i]
            x=x-1
            tbposi[i]=x
            conditiongauche=true
            for(let y in tbposi){
                if(tbposi[y]==x && y!=i){
                    message.channel.send(`${message.author} sautille vers la gauche et trouve <@${tbaut[y]}>\n 
                    Un duel ou une fuite ?`)
                    conditiongauche=false
                }//if
                }//boucle
            if(conditiongauche){
            message.channel.send(`${message.author} tourne à gauche et trouve le vide`)
        }//if
        }//if condi gauche
        }//if endessous de gauche
//boost tier 1 extérieur 
        //boost 81
        if(tbposi[i]==81){
            if(atrib81==1){
                atrib81 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 extérieur, il te donne 1 d'attaque et 2hp`)
                tbat[i]=tbat[i]+1
                tbhp[i]=tbhp[i]+2
            }//if
        }//if
        //boost 82
        if(tbposi[i]==82){
            if(atrib82==1){
                atrib82 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 extérieur, il te donne 1 d'attaque et 2hp`)
                tbat[i]=tbat[i]+1
                tbhp[i]=tbhp[i]+2
            }//if
        }//if
        //boost 78
        if(tbposi[i]==78){
            if(atrib78==1){
                atrib78 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 extérieur, il te donne 1 d'attaque et 2hp`)
                tbat[i]=tbat[i]+1
                tbhp[i]=tbhp[i]+2
            }//if
        }//if
        //boost 88
        if(tbposi[i]==88){
            if(atrib88==1){
                atrib88 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 extérieur, il te donne 1 d'attaque et 2hp`)
                tbat[i]=tbat[i]+1
                tbhp[i]=tbhp[i]+2
            }//if
        }//if
        //boost 17
        if(tbposi[i]==17){
            if(atrib17==1){
                atrib17 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 extérieur, il te donne 1 d'attaque et 2hp`)
                tbat[i]=tbat[i]+1
                tbhp[i]=tbhp[i]+2
            }//if
        }//if
        //boost 21
        if(tbposi[i]==21){
            if(atrib21==1){
                atrib21 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 extérieur, il te donne 1 d'attaque et 2hp`)
                tbat[i]=tbat[i]+1
                tbhp[i]=tbhp[i]+2
            }//if
        }//if
        //boost 18
        if(tbposi[i]==18){
            if(atrib18==1){
                atrib18 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 extérieur, il te donne 1 d'attaque et 2hp`)
                tbat[i]=tbat[i]+1
                tbhp[i]=tbhp[i]+2
            }//if
        }//if
        //boost 11
        if(tbposi[i]==11){
            if(atrib11==1){
                atrib11 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 extérieur, il te donne 1 d'attaque et 2hp`)
                tbat[i]=tbat[i]+1
                tbhp[i]=tbhp[i]+2
            }//if
        }//if
//boost tier 1 intérieur
        //boost 72
        if(tbposi[i]==72){
            if(atrib72==1){
                atrib72 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 74
        if(tbposi[i]==74){
            if(atrib74==1){
                atrib74 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 75
        if(tbposi[i]==75){
            if(atrib75==1){
                atrib75 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 77
        if(tbposi[i]==77){
            if(atrib77==1){
                atrib77 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 57
        if(tbposi[i]==57){
            if(atrib57==1){
                atrib57 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 47
        if(tbposi[i]==47){
            if(atrib47==1){
                atrib47 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 27
        if(tbposi[i]==27){
            if(atrib27==1){
                atrib27 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 25
        if(tbposi[i]==25){
            if(atrib25==1){
                atrib25 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 24
        if(tbposi[i]==24){
            if(atrib24==1){
                atrib24 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 22
        if(tbposi[i]==22){
            if(atrib22==1){
                atrib22 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 42
        if(tbposi[i]==42){
            if(atrib42==1){
                atrib42 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
        //boost 52
        if(tbposi[i]==52){
            if(atrib52==1){
                atrib52 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 1 intérieur, il te donne 1,5 d'attaque et 2,5hp`)
                tbat[i]=tbat[i]+1,5
                tbhp[i]=tbhp[i]+2,5
            }//if
        }//if
//boost tier 2
        //boost 63
        if(tbposi[i]==63){
            if(atrib63==1){
                atrib63 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 64
        if(tbposi[i]==64){
            if(atrib64==1){
                atrib64 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 65
        if(tbposi[i]==65){
            if(atrib65==1){
                atrib65 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 66
        if(tbposi[i]==66){
            if(atrib66==1){
                atrib66 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 56
        if(tbposi[i]==56){
            if(atrib56==1){
                atrib56 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 46
        if(tbposi[i]==46){
            if(atrib46==1){
                atrib46 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 36
        if(tbposi[i]==36){
            if(atrib36==1){
                atrib36 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 35
        if(tbposi[i]==35){
            if(atrib35==1){
                atrib35 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 34
        if(tbposi[i]==34){
            if(atrib34==1){
                atrib34 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 33
        if(tbposi[i]==33){
            if(atrib33==1){
                atrib33 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 43
        if(tbposi[i]==43){
            if(atrib43==1){
                atrib43 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 53
        if(tbposi[i]==53){
            if(atrib53==1){
                atrib53 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
//boost tier 2 exétieur
        //boost 71
        if(tbposi[i]==71){
            if(atrib71==1){
                atrib71 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 87
        if(tbposi[i]==87){
            if(atrib87==1){
                atrib87 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 28
        if(tbposi[i]==28){
            if(atrib28==1){
                atrib28 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
        //boost 12
        if(tbposi[i]==12){
            if(atrib12==1){
                atrib12 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 2, il te donne 2,5 d'attaque et 5hp`)
                tbat[i]=tbat[i]+2,5
                tbhp[i]=tbhp[i]+5
            }//if
        }//if
//boost tier 3
        //boost 54
        if(tbposi[i]==54){
            if(atrib54==1){
                if(aleatoire==1 || aleatoire==2 || aleatoire==3){
                atrib54 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 3, il te donne 4 d'attaque et 8hp`)
                tbat[i]=tbat[i]+4
                tbhp[i]=tbhp[i]+8
                }else{
                atrib54 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un malus tier 3, il te retire 4 d'attaque et 5hp`)
                tbat[i]=tbat[i]-4
                tbhp[i]=tbhp[i]-5
                }
            }//if
        }//if
        //boost 55
        if(tbposi[i]==55){
            if(atrib55==1){
                if(aleatoire==0 || aleatoire==3 || aleatoire==4){
                atrib55 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 3, il te donne 4 d'attaque et 8hp`)
                tbat[i]=tbat[i]+4
                tbhp[i]=tbhp[i]+8
            }else{
                atrib55 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un malus tier 3, il te retire 4 d'attaque et 5hp`)
                tbat[i]=tbat[i]-4
                tbhp[i]=tbhp[i]-5
                }
            }//if
        }//if
        //boost 44
        if(tbposi[i]==44){
            if(atrib44==1){
                if(aleatoire==0 || aleatoire==2 || aleatoire==5){
                atrib44 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 3, il te donne 4 d'attaque et 8hp`)
                tbat[i]=tbat[i]+4
                tbhp[i]=tbhp[i]+8
            }else{
                atrib44 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un malus tier 3, il te retire 4 d'attaque et 5hp`)
                tbat[i]=tbat[i]-4
                tbhp[i]=tbhp[i]-5
            }
            }//if
        }//if
        //boost 45
        if(tbposi[i]==45){
            if(atrib45==1){
                if(aleatoire==1 || aleatoire==4 || aleatoire==5){
                atrib45 = 0
                message.channel.send(`${message.author}, tiens tu as trouvé un boost tier 3, il te donne 4 d'attaque et 8hp`)
                tbat[i]=tbat[i]+4
                tbhp[i]=tbhp[i]+8
            }else{
            atrib45 = 0
            message.channel.send(`${message.author}, tiens tu as trouvé un malus tier 3, il te retire 4 d'attaque et 5hp`)
            tbat[i]=tbat[i]-4
            tbhp[i]=tbhp[i]-5
        }//else
        }
        }//if 
        tbatrib =[atrib88, atrib85, atrib84, atrib81 , atrib77, atrib75, atrib74, atrib72, atrib66, atrib65,atrib64, atrib63, atrib66, atrib58, atrib57
            ,atrib56, atrib55, atrib54, atrib53, atrib52,atrib51,atrib48,atrib47,atrib46,atrib45,atrib44,atrib43,atrib42,atrib41,atrib36,atrib35,atrib34
            ,atrib33, atrib27,atrib25,atrib24,atrib22,atrib18,atrib15,atrib14,atrib11, atrib82,atrib87,atrib78,atrib28,atrib27,atrib12,atrib21,atrib71]  
        
        }//else 1 fois par tour
        }else{
            message.channel.send(`cette direction n'existe pas ${message.author}`)
        }//else
            }else{
                message.channel.send(`${message.author}, tu es à la même position que <@${tbaut[deplace]}, tu fuis ou la baguarre !`)
            }
        }//if condition direction
        }//else tour 
        }//if aut   
    }//boucle aut       
    }else{
        message.channel.send(`Tu n'as pas de personnage ${message.author}`)
    }//else    
}//execute
}//module