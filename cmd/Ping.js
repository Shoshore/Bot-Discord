const Discord= require('discord.js')
module.exports = {
    name: 'ping',
    description: 'ms',
    execute(client, message, args) {
    message.delete()
    message.channel.send('Je cacule ma latence attends').then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        m.edit(`Je lag ou pas ?: **__${ping} ms__**`)
    })
    }//execute
}//module