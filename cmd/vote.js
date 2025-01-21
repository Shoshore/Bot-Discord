module.exports = {
    name: 'vote',
    description: 'donne la possibilité de vote',
    execute(client, message, args) {
        if(message.author.id=='178450818620456960'||message.author.id=='614916253924196357' || message.author.id=='686539762525536267' 
		|| message.author.id=='475364030639243284'|| message.author.id=='330329849904234498'|| message.author.id=='469597206005940224'
		|| message.author.id=='503594521553010698') {
        
        const filter = (reaction, user) => {
            return ['1️⃣', '2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        message.channel.send('Met un des émojie suivant sous ta commande1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟').then(message => {
        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                if (reaction.emoji.name === '1️⃣') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                } 

                if (reaction.emoji.name === '2️⃣') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                        .then(() => message.react('2️⃣'))
                } 

                if (reaction.emoji.name === '3️⃣') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                        .then(() => message.react('2️⃣'))
                        .then(() => message.react('3️⃣'))
                } 

                if (reaction.emoji.name === '4️⃣') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                        .then(() => message.react('2️⃣'))
                        .then(() => message.react('3️⃣'))
                        .then(() => message.react('4️⃣'))
                } 

                if (reaction.emoji.name === '5️⃣') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                        .then(() => message.react('2️⃣'))
                        .then(() => message.react('3️⃣'))
                        .then(() => message.react('4️⃣'))
                        .then(() => message.react('5️⃣'))
                }

                if (reaction.emoji.name === '6️⃣') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                        .then(() => message.react('2️⃣'))
                        .then(() => message.react('3️⃣'))
                        .then(() => message.react('4️⃣'))
                        .then(() => message.react('5️⃣'))
                        .then(() => message.react('6️⃣'))
                }

                if (reaction.emoji.name === '7️⃣') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                        .then(() => message.react('2️⃣'))
                        .then(() => message.react('3️⃣'))
                        .then(() => message.react('4️⃣'))
                        .then(() => message.react('5️⃣'))
                        .then(() => message.react('6️⃣'))
                        .then(() => message.react('7️⃣'))
                }
                
                if (reaction.emoji.name === '8️⃣') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                        .then(() => message.react('2️⃣'))
                        .then(() => message.react('3️⃣'))
                        .then(() => message.react('4️⃣'))
                        .then(() => message.react('5️⃣'))
                        .then(() => message.react('6️⃣'))
                        .then(() => message.react('7️⃣'))
                        .then(() => message.react('8️⃣'))
                }

                if (reaction.emoji.name === '9️⃣') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                        .then(() => message.react('2️⃣'))
                        .then(() => message.react('3️⃣'))
                        .then(() => message.react('4️⃣'))
                        .then(() => message.react('5️⃣'))
                        .then(() => message.react('6️⃣'))
                        .then(() => message.react('7️⃣'))
                        .then(() => message.react('8️⃣'))
                        .then(() => message.react('9️⃣'))
                }

                if (reaction.emoji.name === '🔟') {
                    message.reactions.removeAll().catch(error => console.error('j"ai pas pu clear holy moly ', error));
                    message.react('1️⃣')
                        .then(() => message.react('2️⃣'))
                        .then(() => message.react('3️⃣'))
                        .then(() => message.react('4️⃣'))
                        .then(() => message.react('5️⃣'))
                        .then(() => message.react('6️⃣'))
                        .then(() => message.react('7️⃣'))
                        .then(() => message.react('8️⃣'))
                        .then(() => message.react('9️⃣'))
                        .then(() => message.react('🔟'))
                }

            })
             .catch(collected => {
                console.log('pas de chance');
            });
        });
        } else {
            message.channel.send(`${message.author} tu n'as pas les permissions`)
        }
    }
}
