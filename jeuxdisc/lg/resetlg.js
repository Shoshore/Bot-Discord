const Discord= require('discord.js')
module.exports = {
    name: 'resetlg',
    description: 'inscription',
    execute(client, message, args) {
        if(message.author.id==tbgm[0]){
        tbins = []
        tbins2= []
        tbrole = []
        tblance[0] = 0
        condirole = false
        condiunuse = true
        tbanti2 = []
        conditigm = false
        tbgm = []
        message.channel.send(`J'ai bien reset le lg ${message.author}`)
        }else{
            message.channel.send("Tu n'as pas les permissions")
        }
        }//execute
}//module