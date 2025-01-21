const Discord = require('discord.js')
const client = new Discord.Client();
const clientSettings = require("./Botsettings.json");
const prefix = clientSettings.prefix
const { join } = require("path");
const fs = require('fs');
client.commands = new Discord.Collection();
client.queue = new Map();

const path = ['./cmd', './jeuxdisc/btr', './jeuxdisc/uno', './jeuxdisc/lg']
for (let directorypath of path){  
    let commandfile = fs.readdirSync(directorypath).filter(file => file.endsWith('.js'));
    for (const file of commandfile) {
        const command = require(`${directorypath}/${file}`);
        client.commands.set(command.name, command);
    };
};

let actname = 'Gnar de couette';
let acttype = 'WATCHING';
let botstatus = 'dnd';
let botale = Math.round(Math.random()* (1-0)+0);
if(botale == 1){
    actname = 'Marabouter des gens';
    acttype = 'PLAYING';
};
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);   
    client.user.setPresence({
        status: botstatus = 'dnd', //dnd, invisible, online, idle 
        activity: {
            name: actname,
            type: acttype,// WATCHING, LISTENING, PLAYING
            //url: 'LIEN'//pour straming le lien twitch
        }
    });
});
client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot ) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(!client.commands.has(command)) return;
    client.commands.get(command).execute(client, message, args);   
});

client.login(clientSettings.token);
