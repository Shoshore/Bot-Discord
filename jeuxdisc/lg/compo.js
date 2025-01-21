tbrole = []
tblance = [0]
tbgm = []
let rolegentil = 0
let Ankou = 0
let Ancien =0
let Boucémissaire =0
let Chaman = 0
let ChaperonRouge = 0
let chasseur = 0
let Corbeau =0
let Cupidon =0
let Dictateur =0
let EnfantSauvage = 0
let Fossoyeur =0
let Garde = 0
let idiotduvillage =0
let mentalist =0
let Noctambule = 0
let PetiteFille=0
let Sorcière = 0
let Villageois = 0
let voyante=0

let roleneutre = 0
let Ange = 0
let Assassin =0
let Bouffon = 0
let joueurdeflute =0
let loupgarouB = 0
let Pyroman =0
let voleur = 0

let rolemechant = 0
let GMloupgarou = 0
let LoupgarouBvd = 0
let loupgarouF = 0
let loupgarou = 0
let loupgarouN = 0

const Discord= require('discord.js')
module.exports = {
    name: 'compo',
    description: 'compo',
    execute(client, message, args) {
        message.delete()
        if(message.author.id==tbgm[0]){
    if(tblance[0]==1){ //doit être a 1
    conditionEmbed = false

//gentil :
//ankou
if(args[0]=='ankou'){
    if(args[1]=='+1'){
        Ankou++
        conditionEmbed=true
        tbrole.push('ankou')
        message.channel.send(`Plus un ankou \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Ankou=Ankou+2
        conditionEmbed=true
        tbrole.push('ankou')
        tbrole.push('ankou')
        message.channel.send(`Plus deux ankoux \n voici la composition actuelle :`)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'ankou' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Ankou>0){
            Ankou=Ankou-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un ankou \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'ankou' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Ankou<=1){
            Ankou=0
        }else{
            Ankou=Ankou-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux ankoux \n voici la composition actuelle : `)
    }//if args -2
}// if ankou

//ancien
if(args[0]=='ancien'){
    if(args[1]=='+1'){
        Ancien++
        conditionEmbed=true
        tbrole.push('ancien')
        message.channel.send(`Plus un ancien \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Ancien=Ancien+2
        conditionEmbed=true
        tbrole.push('ancien')
        tbrole.push('ancien')
        message.channel.send(`Plus deux anciens \n voici la composition actuelle :`)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'ancien' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(ancien>0){
            ancien=ancien-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un ancien \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'ancien' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Ancien<=1){
            Ancien=0
        }else{
            Ancien=Ancien-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux anciens \n voici la composition actuelle : `)
    }//if args -2
}// if ancien

//boucémissaire
if(args[0]=='boucémissaire'){
    if(args[1]=='+1'){
        Boucémissaire++
        conditionEmbed=true
        tbrole.push('boucémissaire')
        message.channel.send(`Plus un bouc émissaire \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Boucémissaire=Boucémissaire+2
        conditionEmbed=true
        tbrole.push('boucémissaire')
        tbrole.push('boucémissaire')
        message.channel.send(`Plus deux bouc émissaires \n voici la composition actuelle :`)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'bouc émissaire' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Boucémissaire>0){
            Boucémissaire=Boucémissaire-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un bouc émissaire \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'bouc émissaire' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Boucémissaire<=1){
            Boucémissaire=0
        }else{
            Boucémissaire=Boucémissaire-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux bouc émissaires \n voici la composition actuelle : `)
    }//if args -2
}// if boucémissaire

//chaman
if(args[0]=='chaman'){
    if(args[1]=='+1'){
        Chaman++
        conditionEmbed=true
        tbrole.push('chaman')
        message.channel.send(`Plus un chaman \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Chaman=Chaman+2
        conditionEmbed=true
        tbrole.push('chaman')
        tbrole.push('chaman')
        message.channel.send(`Plus deux chamans \n voici la composition actuelle :`)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'chaman' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Chaman>0){
            Chaman=Chaman-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un chaman \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'chaman' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Chaman<=1){
            Chaman=0
        }else{
            Chaman=Chaman-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux chamans \n voici la composition actuelle : `)
    }//if args -2
}// if chaman

//Chaperonrouge
if(args[0]=='chaperonrouge'){
    if(args[1]=='+1'){
        ChaperonRouge++
        conditionEmbed=true
        tbrole.push('Chaperonrouge')
        message.channel.send(`Plus un chaperon rouge \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        ChaperonRouge=ChaperonRouge+2
        conditionEmbed=true
        tbrole.push('Chaperonrouge')
        tbrole.push('Chaperonrouge')
        message.channel.send(`Plus deux chaperons rouge \n voici la composition actuelle :`)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'Chaperonrouge' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(ChaperonRouge>0){
            ChaperonRouge=ChaperonRouge-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un chaperon rouge \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'Chaperonrouge' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(ChaperonRouge<=1){
            ChaperonRouge=0
        }else{
            ChaperonRouge=ChaperonRouge-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux chaperons rouge \n voici la composition actuelle : `)
    }//if args -2
}// if Chaperonrouge

//chasseur
if(args[0]=='chasseur'){
    if(args[1]=='+1'){
        chasseur++
        conditionEmbed = true
        tbrole.push('chasseur')
        message.channel.send(`Plus un chasseur \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        chasseur=chasseur+2
        conditionEmbed = true
        tbrole.push('chasseur')
        tbrole.push('chasseur')
        message.channel.send(`Plus deux chasseurs \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'chasseur' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(chasseur>0){
            chasseur = chasseur-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un chasseur \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'chasseur' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(chasseur<=1){
            chasseur=0
        }else{
            chasseur=chasseur-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux chasseurs \n voici la composition actuelle : `)
    }//if args -2
}// if chasseur


//corbeau
if(args[0]=='corbeau'){
    if(args[1]=='+1'){
        Corbeau++
        conditionEmbed=true
        tbrole.push('corbeau')
        message.channel.send(`Plus un corbeau \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Corbeau = Corbeau+2
        conditionEmbed=true
        tbrole.push('corbeau')
        tbrole.push('corbeau')
        message.channel.send(`Plus deux corbeaux \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'corbeau' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Corbeau>0){
            Corbeau= Corbeau-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un corbeau \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'corbeau' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Corbeau<=1){
            Corbeau=0
        }else{
            Corbeau = Corbeau-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux corbeaux \n voici la composition actuelle : `)
    }//if args -2
}// if corbeau

//cupidon
if(args[0]=='cupidon'){
    if(args[1]=='+1'){
        Cupidon++
        conditionEmbed=true
        tbrole.push('cupidon')
        message.channel.send(`Plus un cupidon \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Cupidon = Cupidon+2
        conditionEmbed=true
        tbrole.push('cupidon')
        tbrole.push('cupidon')
        message.channel.send(`Plus deux cupidons \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'cupidon' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Cupidon>0){
            Cupidon= Cupidon-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un cupidon \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'cupidon' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Cupidon<=1){
            Cupidon=0
        }else{
            Cupidon = Cupidon-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux cupidons \n voici la composition actuelle : `)
    }//if args -2
}// if cupidon

//Dictateur
if(args[0]=='dictateur'){
    if(args[1]=='+1'){
        Dictateur++
        conditionEmbed=true
        tbrole.push('dictateur')
        message.channel.send(`Plus un dictateur \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Dictateur = Dictateur+2
        conditionEmbed=true
        tbrole.push('dictateur')
        tbrole.push('dictateur')
        message.channel.send(`Plus deux dictateurs \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'dictateur' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Dictateur>0){
            Dictateur= Dictateur-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un dictateur \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'dictateur' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Dictateur<=1){
            Dictateur=0
        }else{
            Dictateur = Dictateur-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux dictateurs \n voici la composition actuelle : `)
    }//if args -2
}// if dictateur

//enfantsauvage
if(args[0]=='enfantsauvage'){
    if(args[1]=='+1'){
        EnfantSauvage++
        conditionEmbed=true
        tbrole.push('enfantsauvage')
        message.channel.send(`Plus un enfant sauvage \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        EnfantSauvage = EnfantSauvage+2
        conditionEmbed=true
        tbrole.push('enfantsauvage')
        tbrole.push('enfantsauvage')
        message.channel.send(`Plus deux enfants sauvage \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'enfantsauvage' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(EnfantSauvage>0){
            EnfantSauvage= EnfantSauvage-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un enfant sauvage \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'enfantsauvage' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(EnfantSauvage<=1){
            EnfantSauvage=0
        }else{
            EnfantSauvage = EnfantSauvage-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux enfants sauvage \n voici la composition actuelle : `)
    }//if args -2
}// if enfantsauvage

//fossoyeur
if(args[0]=='fossoyeur'){
    if(args[1]=='+1'){
        Fossoyeur++
        conditionEmbed=true
        tbrole.push('fossoyeur')
        message.channel.send(`Plus un fossoyeur \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Fossoyeur = Fossoyeur+2
        conditionEmbed=true
        tbrole.push('fossoyeur')
        tbrole.push('fossoyeur')
        message.channel.send(`Plus deux fossoyeurs \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'fossoyeur' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Fossoyeur>0){
            Fossoyeur= Fossoyeur-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un fossoyeur \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'fossoyeur' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Fossoyeur<=1){
            Fossoyeur=0
        }else{
            Fossoyeur = Fossoyeur-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux fossoyeurs \n voici la composition actuelle : `)
    }//if args -2
}// if fossoyeur

//garde
if(args[0]=='garde'){
    if(args[1]=='+1'){
        Garde++
        conditionEmbed = true
        tbrole.push('garde')
        message.channel.send(`Plus un garde \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Garde= Garde+2
        conditionEmbed = true
        tbrole.push('garde')
        tbrole.push('garde')
        message.channel.send(`Plus deux gardes \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'garde' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Garde>0){
           Garde = Garde-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un garde \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'garde' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Garde<=1){
            Garde=0
        }else{
            Garde= Garde-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux gardes \n voici la composition actuelle : `)
    }//if args -2
}// if garde

//idiotduvillage
if(args[0]=='idiotduvillage'){
    if(args[1]=='+1'){
        idiotduvillage++
        conditionEmbed = true
        tbrole.push('idiotduvillage')
        message.channel.send(`Plus un idiot du village \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        idiotduvillage= idiotduvillage+2
        conditionEmbed = true
        tbrole.push('idiotduvillage')
        tbrole.push('idiotduvillage')
        message.channel.send(`Plus deux idiots du village \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'idiotduvillage' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(idiotduvillage>0){
            idiotduvillage = idiotduvillage-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un idiot du village \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'idiotduvillage' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(idiotduvillage<=1){
            idiotduvillage=0
        }else{
            idiotduvillage= idiotduvillage-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux idiots du village \n voici la composition actuelle : `)
    }//if args -2
}// if idiotduvillage

//mentalist
if(args[0]=='mentalist'){
    if(args[1]=='+1'){
        mentalist++
        conditionEmbed = true
        tbrole.push('mentalist')
        message.channel.send(`Plus un mentalist \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        mentalist= mentalist+2
        conditionEmbed = true
        tbrole.push('mentalist')
        tbrole.push('mentalist')
        message.channel.send(`Plus deux mentalists \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'mentalist' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(mentalist>0){
            mentalist = mentalist-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un mentalist \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'mentalist' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(mentalist<=1){
            mentalist=0
        }else{
            mentalist= mentalist-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux mentalists \n voici la composition actuelle : `)
    }//if args -2
}// if mentalist

//noctambule
if(args[0]=='noctambule'){
    if(args[1]=='+1'){
        Noctambule++
        conditionEmbed = true
        tbrole.push('noctambule')
        message.channel.send(`Plus un noctambule \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        Noctambule= Noctambule+2
        conditionEmbed = true
        tbrole.push('noctambule')
        tbrole.push('noctambule')
        message.channel.send(`Plus deux noctambules \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'noctambule' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Noctambule>0){
            Noctambule = Noctambule-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins un noctambule \n voici la composition actuelle : `)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'noctambule' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Noctambule<=1){
            Noctambule=0
        }else{
            Noctambule= Noctambule-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux noctambules \n voici la composition actuelle : `)
    }//if args -2
}// if noctambule

//petitefille
if(args[0]=='petitefille'){
    if(args[1]=='+1'){
        conditionEmbed=true
        PetiteFille++
        tbrole.push('petitefille')
        message.channel.send(`Plus une petite fille \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='+2'){
        conditionEmbed=true
        PetiteFille = PetiteFille+2
        tbrole.push('petitefille')
        tbrole.push('petitefille')
        message.channel.send(`Plus deux petite filles \n voici la composition actuelle : `)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'petitefille' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(PetiteFille>0){
            PetiteFille = PetiteFille-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins une petite fille \n voici la composition actuelle :`)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'petitefille' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(PetiteFille<=1){
            PetiteFille=0
        }else{
            PetiteFille=PetiteFille-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux petite filles \n voici la composition actuelle :`)
    }//if args -2
}//if petitefille

//sorsière
if(args[0]=='sorcière'){
    if(args[1]=='+1'){
        Sorcière++
        conditionEmbed =true
        tbrole.push('sorcière')
        message.channel.send(`Plus une sorcière \n voici la composition actuelle :`)
    }//if +2
    if(args[1]=='+2'){
        Sorcière = Sorcière+2
        conditionEmbed =true
        tbrole.push('sorcière')
        tbrole.push('sorcière')
        message.channel.send(`Plus deux sorcières \n voici la composition actuelle :`)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'sorcière' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Sorcière>0){
            Sorcière= Sorcière-1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins une sorcière \n voici la composition actuelle :`)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'sorcière' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Sorcière<=1){
            Sorcière=0
        }else{
            Sorcière= Sorcière-2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux sorcières \n voici la composition actuelle :`)
    }//if args -2
}// if soso

//villageois
if(args[0]=='villageois'){
    if(args[1]=='+1'){
        tbrole.push('villageois')
        Villageois++
        message.channel.send(`Plus un villageois \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('villageois')
        tbrole.push('villageois')
        Villageois= Villageois+2
        message.channel.send(`Plus deux villageois \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'villageois' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Villageois>0){
            Villageois= Villageois-1
        }//if
        condiune = true
        message.channel.send(`Moins un viallgeois \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'villageois' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Villageois>1){
            Villageois = Villageois-2
        }else{
            Villageois=0
        }//if
        condiune = true
        message.channel.send(`Moins deux villageois \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if vivi

//voyante 
if(args[0]=='voyante'){
    if(args[1]=='+1'){
        voyante ++
        conditionEmbed =true
        tbrole.push('voyante ')
        message.channel.send(`Plus une voyante  \n voici la composition actuelle :`)
    }//if +2
    if(args[1]=='+2'){
        voyante  = voyante +2
        conditionEmbed =true
        tbrole.push('voyante ')
        tbrole.push('voyante ')
        message.channel.send(`Plus deux voyantes \n voici la composition actuelle :`)
    }//if +2
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'voyante ' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(voyante >0){
            voyante = voyante -1
        }//if
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins une voyante  \n voici la composition actuelle :`)
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'voyante ' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(voyante <=1){
            voyante =0
        }else{
            voyante = voyante -2
        }//else
        conditionEmbed=true
        condiune = true
        message.channel.send(`Moins deux voyantes \n voici la composition actuelle :`)
    }//if args -2
}// if voyante 

//neutre :
//ange
if(args[0]=='ange'){
    if(args[1]=='+1'){
        tbrole.push('ange')
        Ange++
        message.channel.send(`Plus un ange \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('ange')
        tbrole.push('ange')
        Ange= Ange+2
        message.channel.send(`Plus deux anges \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'ange' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Ange>0){
            Ange= Ange-1
        }//if
        condiune = true
        message.channel.send(`Moins un ange \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'ange' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Ange>1){
            Ange = Ange-2
        }else{
            Ange=0
        }//if
        condiune = true
        message.channel.send(`Moins deux anges \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if ange

//assassin
if(args[0]=='assassin'){
    if(args[1]=='+1'){
        tbrole.push('assassin')
        Assassin++
        message.channel.send(`Plus un assassin \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('assassin')
        tbrole.push('assassin')
        Assassin= Assassin+2
        message.channel.send(`Plus deux assassins \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'assassin' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Assassin>0){
            Assassin= Assassin-1
        }//if
        condiune = true
        message.channel.send(`Moins un assassin \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'assassin' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Assassin>1){
            Assassin = Assassin-2
        }else{
            Assassin=0
        }//if
        condiune = true
        message.channel.send(`Moins deux assassins \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if assassin

//bouffon
if(args[0]=='bouffon'){
    if(args[1]=='+1'){
        tbrole.push('bouffon')
        Bouffon++
        message.channel.send(`Plus un bouffon \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('bouffon')
        tbrole.push('bouffon')
        Bouffon= Bouffon+2
        message.channel.send(`Plus deux bouffons \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'bouffon' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Bouffon>0){
            Bouffon= Bouffon-1
        }//if
        condiune = true
        message.channel.send(`Moins un bouffon \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'bouffon' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Bouffon>1){
            Bouffon = Bouffon-2
        }else{
            Bouffon=0
        }//if
        condiune = true
        message.channel.send(`Moins deux bouffons \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if bouffon

//joueurdeflûte
if(args[0]=='joueurdeflûte'){
    if(args[1]=='+1'){
        tbrole.push('joueurdeflûte')
        joueurdeflute++
        message.channel.send(`Plus un joueur de flûte \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('joueurdeflûte')
        tbrole.push('joueurdeflûte')
        joueurdeflute= joueurdeflute+2
        message.channel.send(`Plus deux joueurs de flûte \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'joueurdeflûte' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(joueurdeflute>0){
            joueurdeflute= joueurdeflute-1
        }//if
        condiune = true
        message.channel.send(`Moins un joueur de flûte \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'joueurdeflûte' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(joueurdeflute>1){
            joueurdeflute = joueurdeflute-2
        }else{
            joueurdeflute=0
        }//if
        condiune = true
        message.channel.send(`Moins deux joueurs de flûte \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if joueurdeflute

//Pyroman
if(args[0]=='pyroman'){
    if(args[1]=='+1'){
        tbrole.push('pyroman')
        Pyroman++
        message.channel.send(`Plus un pyroman \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('pyroman')
        tbrole.push('pyroman')
        Pyroman= Pyroman+2
        message.channel.send(`Plus deux pyromans \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'pyroman' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(Pyroman>0){
            Pyroman= Pyroman-1
        }//if
        condiune = true
        message.channel.send(`Moins un pyroman \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'pyroman' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(Pyroman>1){
            Pyroman = Pyroman-2
        }else{
            Pyroman=0
        }//if
        condiune = true
        message.channel.send(`Moins deux pyromans \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if pyroman

//voleur
if(args[0]=='voleur'){
    if(args[1]=='+1'){
        tbrole.push('voleur')
        voleur++
        message.channel.send(`Plus un voleur \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('voleur')
        tbrole.push('voleur')
        voleur= voleur+2
        message.channel.send(`Plus deux voleurs \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'voleur' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(voleur>0){
            voleur= voleur-1
        }//if
        condiune = true
        message.channel.send(`Moins un voleur \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'voleur' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(voleur>1){
            voleur = voleur-2
        }else{
            voleur=0
        }//if
        condiune = true
        message.channel.send(`Moins deux voleurs \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if voleur

//role méchant
//grandméchantloupgarou
if(args[0]=='grandméchantloupgarou'){
    if(args[1]=='+1'){
        tbrole.push('grandméchantloupgarou')
        GMloupgarou++
        message.channel.send(`Plus un grand méchant loup garou \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('grandméchantloupgarou')
        tbrole.push('grandméchantloupgarou')
        GMloupgarou= GMloupgarou+2
        message.channel.send(`Plus deux grand méchant loups garou \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'grandméchantloupgarou' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(GMloupgarou>0){
            GMloupgarou= GMloupgarou-1
        }//if
        condiune = true
        message.channel.send(`Moins un grand méchant loup garou \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'grandméchantloupgarou' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(GMloupgarou>1){
            GMloupgarou = GMloupgarou-2
        }else{
            GMloupgarou=0
        }//if
        condiune = true
        message.channel.send(`Moins deux grand méchant loups garou \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if grandméchantloupgarou

//loupgarou
if(args[0]=='loupgarou'){
    if(args[1]=='+1'){
        tbrole.push('loupgarou')
        loupgarou++
        message.channel.send(`Plus un loupgarou \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('loupgarou')
        tbrole.push('loupgarou')
        loupgarou= loupgarou+2
        message.channel.send(`Plus deux loups garou \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgarou' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(loupgarou>0){
            loupgarou= loupgarou-1
        }//if
        condiune = true
        message.channel.send(`Moins un loup garou \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgarou' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(loupgarou>1){
            loupgarou = loupgarou-2
        }else{
            loupgarou=0
        }//if
        condiune = true
        message.channel.send(`Moins deux loups garou \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if loupgarou

//loupgaroubavard
if(args[0]=='loupgaroubavard'){
    if(args[1]=='+1'){
        tbrole.push('loupgaroubavard')
        LoupgarouBvd++
        message.channel.send(`Plus un loup garou bavard \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('loupgaroubavard')
        tbrole.push('loupgaroubavard')
        LoupgarouBvd= loupgarouBvd+2
        message.channel.send(`Plus deux loups garou bavard \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgaroubavard' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(LoupgarouBvd>0){
            LoupgarouBvd= LoupgarouBvd-1
        }//if
        condiune = true
        message.channel.send(`Moins un loup garou bavard \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgarouBvd' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(LoupgarouBvd>1){
            LoupgarouBvd = LoupgarouBvd-2
        }else{
            LoupgarouBvd=0
        }//if
        condiune = true
        message.channel.send(`Moins deux loups garou bavard \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if loupgaroubavard

//loupgaroubavard
if(args[0]=='loupgaroubavard'){
    if(args[1]=='+1'){
        tbrole.push('loupgaroubavard')
        LoupgarouBvd++
        message.channel.send(`Plus un loup garou bavard \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('loupgaroubavard')
        tbrole.push('loupgaroubavard')
        LoupgarouBvd= LoupgarouBvd+2
        message.channel.send(`Plus deux loups garou bavard \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgaroubavard' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(LoupgarouBvd>0){
            LoupgarouBvd= LoupgarouBvd-1
        }//if
        condiune = true
        message.channel.send(`Moins un loup garou bavard \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgarouBvd' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(LoupgarouBvd>1){
            LoupgarouBvd = LoupgarouBvd-2
        }else{
            LoupgarouBvd=0
        }//if
        condiune = true
        message.channel.send(`Moins deux loups garou bavard \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if loupgaroubavard

//loupgaroufeutré
if(args[0]=='loupgaroufeutré'){
    if(args[1]=='+1'){
        tbrole.push('loupgaroufeutré')
        loupgarouF++
        message.channel.send(`Plus un loup garou feutré \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('loupgaroufeutré')
        tbrole.push('loupgaroufeutré')
        loupgarouF= loupgarouF+2
        message.channel.send(`Plus deux loups garou feutré \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgaroufeutré' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(loupgarouF>0){
            loupgarouF= loupgarouF-1
        }//if
        condiune = true
        message.channel.send(`Moins un loup garou feutré \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgaroufeutré' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(loupgarouF>1){
            loupgarouF = loupgarouF-2
        }else{
            loupgarouF=0
        }//if
        condiune = true
        message.channel.send(`Moins deux loups garou feutré \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if loupgaroufeutré

//loupgarounoir
if(args[0]=='loupgarounoir'){
    if(args[1]=='+1'){
        tbrole.push('loupgarounoir')
        loupgarouN++
        message.channel.send(`Plus un loup garou noir \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if +2
    if(args[1]=='+2'){
        tbrole.push('loupgarounoir')
        tbrole.push('loupgarounoir')
        loupgarouN= loupgarouN+2
        message.channel.send(`Plus deux loups garou noir \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if +1
    if(args[1]=='-1'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgarounoir' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 1)
                condiune = false
            }//if
        }//for
        if(loupgarouN>0){
            loupgarouN= loupgarouN-1
        }//if
        condiune = true
        message.channel.send(`Moins un loup garou noir \n voici la composition actuelle :`)
        conditionEmbed = true
    }//if args -1
    if(args[1]=='-2'){
        condiune = true
        for(let place in tbrole){
            if(tbrole[place] == 'loupgarounoir' && condiune===true){
                const deleterole = tbrole.indexOf(place)
                tbrole.splice(deleterole, 2)
                condiune = false
            }//if
        }//for
        if(loupgarouN>1){
            loupgarouN = loupgarouN-2
        }else{
            loupgarouN=0
        }//if
        condiune = true
        message.channel.send(`Moins deux loups garou noir \n voici la composition actuelle : `)
        conditionEmbed = true
    }//if args -2
}// if loupgarounoir

rolegentil= mentalist+Villageois+Sorcière+Garde+PetiteFille+Corbeau+Ankou+chasseur+Ancien+Boucémissaire+Chaman+ChaperonRouge+Cupidon+Dictateur+EnfantSauvage+Fossoyeur+idiotduvillage+Noctambule+voyante
roleneutre=Ange+loupgarouB+Assassin+Pyroman+voleur+joueurdeflute+Bouffon
rolemechant=loupgarouN+loupgarou+LoupgarouBvd+GMloupgarou+loupgarouF

const CompoLg = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Composition du Loup Garou')
        .setURL('https://discord.js.org/')
        .setAuthor('Piou', 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg', 'https://discord.js.org')
        .setDescription(`Voici La composition acutelle`)
        .addFields(
            { name: 'Role Gentil :', value: rolegentil, inline: false },//gentil
            { name: `Ankou : ${Ankou}`, value: `ancien : ${Ancien}`, inline: true },
            { name: `Boucémissaire : ${Boucémissaire}`, value: `chaman : ${Chaman}`, inline: true },
            { name: `Chaperon rouge : ${ChaperonRouge}`, value: `chasseur : ${chasseur}`, inline: true },
            { name: `Corbeau : ${Corbeau}`, value: `cupidon : ${Cupidon}`, inline: true },
            { name: `Dictateur : ${Dictateur}`, value: `enfantsauvage : ${EnfantSauvage}`, inline: true },
            { name: `Fossoyeur : ${Fossoyeur}`, value: `garde : ${Garde}`, inline: true },
            { name: `Idiot du village : ${idiotduvillage}`, value: `Noctambule : ${Noctambule}`, inline: true },
            { name: `Mentalist : ${mentalist}`, value: `Petite Fille : ${PetiteFille}`, inline: true },
            { name: `Sorcière : ${Sorcière}`, value: `Villageois : ${Villageois}`, inline: true },
            { name: `Voyante : ${voyante}`, value: `aucun`, inline: true },
            { name: 'Role Neutre :', value: roleneutre , inline: false },//neutre
            { name: `Ange : ${Ange}`, value: `Assassin : ${Assassin}`, inline: true },
            { name: `Bouffon : ${Bouffon}`, value: `Joueur de flûte : ${joueurdeflute}`, inline: true },
            { name: `Loup garou blanc : ${loupgarouB}`, value: `Pyroman : ${Pyroman}`, inline: true },
            { name: `Voleur : ${voleur}`, value: `aucun`, inline: true },
            { name: 'Role Méchant :', value: rolemechant, inline: false },//mechant
            { name: `Grand méchant loup garou : ${GMloupgarou}`, value: `Loup garou ${loupgarou}`, inline: true },
            { name: `Loup garou bavard : ${LoupgarouBvd}`, value: `Loup garou feutré ${loupgarouF}`, inline: true }, 
            { name: `Loup garou noir : ${loupgarouN}`, value: `aucun`, inline: true },        
        )//adfiel        
    .setFooter("Tada j'ai une trop bonne mémoire!!", 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg');  
if(conditionEmbed){
    message.channel.send(CompoLg)
}//if
if(args.join(' ')=='efface'){
Ankou=0
Ancien=0
Boucémissaire=0
Chaman=0
ChaperonRouge =0
chasseur=0
Corbeau=0
Cupidon=0
Dictateur=0
EnfantSauvage=0
Fossoyeur=0
Garde=0
idiotduvillage=0
mentalist =0
Noctambule=0
PetiteFille=0
Sorcière=0
Villageois=0
voyante = 0

Ange=0
Assassin=0
Bouffon = 0
joueurdeflute=0
loupgarouB=0
Pyroman=0
voleur=0

GMloupgarou=0
loupgarou=0
LoupgarouBvd=0
loupgarouF=0
loupgarouN=0

}//if efface

if(args.join(' ')=='liste'){
    message.channel.send(CompoLg)
}//if
}else{
    message.channel.send("attends que la partie est commencé!")
}//else
        }else{
            message.channel.send("tu n'as pas les permissions")
        }//else
        }//execute
}//module

// gentil:
// ankou*
// ancien*
// boucémissaire*
// chaman*
// chaperonrouge*
// chasseur*
// corbeau*
// cupidon*
// dictateur*
// enfantsauvage*
// fossoyeur*
// garde*
// idiotduvillage*
// mentalist *
// Noctambule*
// petitefille*
// sorcière*
// villageois*
// voyante*

// neutre:
// ange*
// Assassin*
// bouffon*
// joueurdeflute*
// loupgaroublanc*
// Pyroman*
// Voleur*

// méchant:
// grandméchantloupgarou*
// loupgarou*
// loupgaroubavard*
// Loupgaroufeutré*
// Loupgarounoir*
