const Discord = require('discord.js');
module.exports = {
    name: 'map',
    description: 'La map',
    execute(client, message, args) {
        message.delete()
        if(message.author.id=='178450818620456960') {
        let x99 ='Personne'
        let x98 ='Personne'
        let x97 ='Personne'
        let x96 ='Personne'
        let x95 ='Personne'
        let x94 ='Personne'
        let x93 ='Personne'
        let x92 ='Personne'
        let x91 ='Personne'
        let x90 ='Personne'
        let x89 ='Personne'
        let x88 =`Personne, ${tbatrib[0]} Boost`
        let x87 =`Personne, ${tbatrib[42]} Boost`
        let x86 ='Personne'
        let x85 =`Personne`
        let x84 =`Personne`
        let x83 ='Personne'
        let x82 =`Personne, ${tbatrib[41]} Boost`
        let x81 =`Personne, ${tbatrib[3]} Boost`
        let x80 ='Personne'
        let x79 ='Personne'
        let x78 =`Personne, ${tbatrib[43]} Boost`
        let x77 =`Personne, ${tbatrib[4]} Boost`
        let x76 ='Personne'
        let x75 =`Personne, ${tbatrib[5]} Boost`
        let x74 =`Personne, ${tbatrib[6]} Boost`
        let x73 ='Personne'
        let x72 =`Personne, ${tbatrib[7]} Boost`
        let x71 =`Personne, ${tbatrib[48]} Boost`
        let x70 ='Personne'
        let x69 ='Personne'
        let x68 ='Personne'
        let x67 ='Personne'
        let x66 =`Personne, ${tbatrib[8]} Boost`
        let x65 =`Personne, ${tbatrib[9]} Boost`
        let x64 =`Personne, ${tbatrib[10]} Boost`
        let x63 =`Personne, ${tbatrib[12]} Boost`
        let x62 ='Personne'
        let x61 ='Personne'
        let x60 ='Personne'
        let x59 ='Personne'
        let x58 =`Personne`
        let x57 =`Personne, ${tbatrib[14]} Boost`
        let x56 =`Personne, ${tbatrib[15]} Boost`
        let x55 =`Personne, ${tbatrib[16]} Boost`
        let x54 =`Personne, ${tbatrib[17]} Boost`
        let x53 =`Personne, ${tbatrib[18]} Boost`
        let x52 =`Personne, ${tbatrib[19]} Boost`
        let x51 =`Personne`
        let x50 ='Personne'
        let x49 ='Personne'
        let x48 =`Personne`
        let x47 =`Personne, ${tbatrib[22]} Boost`
        let x46 =`Personne, ${tbatrib[23]} Boost`
        let x45 =`Personne, ${tbatrib[24]} Boost`
        let x44 =`Personne, ${tbatrib[25]} Boost`
        let x43 =`Personne, ${tbatrib[26]} Boost`
        let x42 =`Personne, ${tbatrib[27]} Boost`
        let x41 =`Personne`
        let x40 =`Personne`
        let x39 ='Personne'
        let x38 ='Personne'
        let x37 ='Personne'
        let x36 =`Personne, ${tbatrib[29]} Boost`
        let x35 =`Personne, ${tbatrib[30]} Boost`
        let x34 =`Personne, ${tbatrib[31]} Boost`
        let x33 =`Personne, ${tbatrib[32]} Boost`
        let x32 ='Personne'
        let x31 ='Personne'
        let x30 ='Personne'
        let x29 ='Personne'
        let x28 =`Personne, ${tbatrib[44]} Boost`
        let x27 =`Personne, ${tbatrib[33]} Boost`
        let x26 ='Personne'
        let x25 =`Personne, ${tbatrib[34]} Boost`
        let x24 =`Personne, ${tbatrib[35]} Boost`
        let x23 ='Personne'
        let x22 =`Personne, ${tbatrib[36]} Boost`
        let x21 =`Personne, ${tbatrib[47]} Boost`
        let x20 ='Personne'
        let x19 ='Personne'
        let x18 =`Personne, ${tbatrib[37]} Boost`
        let x17 =`Personne, ${tbatrib[45]} Boost`
        let x16 ='Personne'
        let x15 =`Personne`
        let x14 =`Personne`
        let x13 ='Personne'
        let x12 =`Personne, ${tbatrib[46]} Boost`
        let x11 =`Personne, ${tbatrib[40]} Boost`
        let x10 ='Personne'
        let x9 ='Personne'
        let x8 ='Personne'
        let x7 ='Personne'
        let x6 ='Personne'
        let x5 ='Personne'
        let x4 ='Personne'
        let x3 ='Personne'
        let x2 ='Personne'
        let x1 ='Personne'
        let x0 ='Personne'

//test
for(let i=0;i<99; i++){
    for(let comptage in tbposi){
        if(tbposi[comptage]==i){
            msg = tbaut[comptage]
            eval("x" + i + '= `<@${msg}>`')
        }//for 
     }//if
}//for

//embed1
const Map = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Map')
        .setURL('https://discord.js.org/')
        .attachFiles(['../discord bot/jeuxdisc/btr/piou.png'])
        .setAuthor('Piou', 'attachment://piou.png', 'https://discord.js.org')
        .setDescription(`Voici la map ${message.author}, tu peux y voir on sont postionnais les autres joeurs:`)
        .addFields(
            { name: '99', value: x99, inline: true },
            { name: '98', value: x98, inline: true },
            { name: '97', value: x97, inline: true },
            { name: '96', value: x96, inline: true },
            { name: '95', value: x95, inline: true },
            { name: '94', value: x94, inline: true },
            { name: '93', value: x93, inline: true },
            { name: '92', value: x92, inline: true },
            { name: '91', value: x91, inline: true },
            { name: '90', value: x90, inline: false },
            { name: '89', value: x89, inline: true },
            { name: '88', value: x88, inline: true },
            { name: '87', value: x87, inline: true },
            { name: '86', value: x86, inline: true },
            { name: '85', value: x85, inline: true },
            { name: '84', value: x84, inline: true },
            { name: '83', value: x83, inline: true },
            { name: '82', value: x82, inline: true },
            { name: '81', value: x81, inline: true },
            { name: '80', value: x80, inline: false },
            { name: '79', value: x79, inline: true },
            { name: '78', value: x78, inline: true },
            { name: '77', value: x77, inline: true },
            { name: '76', value: x76, inline: true },
            { name: '75', value: x75, inline: true },            
        )//addfiel
//embed 2
        const Map2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addFields(
            { name: '74', value: x74, inline: true },
            { name: '73', value: x73, inline: true },
            { name: '72', value: x72, inline: true },
            { name: '71', value: x71, inline: true },
            { name: '70', value: x70, inline: true },
            { name: '69', value: x69, inline: false },
            { name: '68', value: x68, inline: true },
            { name: '67', value: x67, inline: true },
            { name: '66', value: x66, inline: true },
            { name: '65', value: x65, inline: true },
            { name: '64', value: x64, inline: true },
            { name: '63', value: x63, inline: true },
            { name: '62', value: x62, inline: true },
            { name: '61', value: x61, inline: true },
            { name: '60', value: x60, inline: true },
            { name: '59', value: x59, inline: true },
            { name: '58', value: x58, inline: true },
            { name: '57', value: x57, inline: true },
            { name: '56', value: x56, inline: true },
            { name: '55', value: x55, inline: true },
            { name: '54', value: x54, inline: true },
            { name: '53', value: x53, inline: true },
            { name: '52', value: x52, inline: true },
            { name: '51', value: x51, inline: true },
            { name: '50', value: x50, inline: true },           
        )//adfiel
//embed3
        const Map3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addFields(
            { name: '49', value: x49, inline: true },
            { name: '48', value: x48, inline: true },
            { name: '47', value: x47, inline: true },
            { name: '46', value: x46, inline: true },
            { name: '45', value: x45, inline: true },
            { name: '44', value: x44, inline: true },
            { name: '43', value: x43, inline: true },
            { name: '42', value: x42, inline: true },
            { name: '41', value: x41, inline: true },
            { name: '40', value: x40, inline: false },
            { name: '39', value: x39, inline: true },
            { name: '38', value: x38, inline: true },
            { name: '37', value: x37, inline: true },
            { name: '36', value: x36, inline: true },
            { name: '35', value: x35, inline: true },
            { name: '34', value: x34, inline: true },
            { name: '33', value: x33, inline: true },
            { name: '32', value: x32, inline: true },
            { name: '31', value: x31, inline: true },
            { name: '30', value: x30, inline: false },
            { name: '29', value: x29, inline: true },
            { name: '28', value: x28, inline: true },
            { name: '27', value: x27, inline: true },
            { name: '26', value: x26, inline: true },
            { name: '25', value: x25, inline: true },            
        )//adfiel
//embed 4 
        const Map4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addFields(
            { name: '24', value: x24, inline: true },
            { name: '23', value: x23, inline: true },
            { name: '22', value: x22, inline: true },
            { name: '21', value: x21, inline: true },
            { name: '20', value: x20, inline: true },
            { name: '19', value: x19, inline: false },
            { name: '18', value: x18, inline: true },
            { name: '17', value: x17, inline: true },
            { name: '16', value: x16, inline: true },
            { name: '15', value: x15, inline: true },
            { name: '14', value: x14, inline: true },
            { name: '13', value: x13, inline: true },
            { name: '12', value: x12, inline: true },
            { name: '11', value: x11, inline: true },
            { name: '10', value: x10, inline: true },
            { name: '09', value: x9, inline: true },
            { name: '08', value: x8, inline: true },
            { name: '07', value: x7, inline: true },
            { name: '06', value: x6, inline: true },
            { name: '05', value: x5, inline: true },
            { name: '04', value: x4, inline: true },
            { name: '03', value: x3, inline: true },
            { name: '02', value: x2, inline: true },
            { name: '01', value: x1, inline: true },
            { name: '00', value: x0, inline: true },           
        )//adfiel        
    .setFooter("Alors tu es ou ?", 'https://cdn.discordapp.com/attachments/707993253625987142/711154064091643914/piou.jpg');
        message.channel.send(Map)
            .then(() =>message.channel.send(Map2))
            .then(() =>message.channel.send(Map3))
            .then(() =>message.channel.send(Map4))
        }else{
            message.channel.send(`${message.author}, tu n'as pas les permissions dsl (car le code est lourd et faut pas en abusé)`)
        }
    }//execute
}//module