require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


// Event listener for when the client is online
client.on('ready', (c) => {
    console.log(`${c.user.tag} is online...`);
})

// Event listener for when a message is sent
client.on('messageCreate', (msg) => {
    if (msg.author.bot) return;

    if (msg.content === 'ping' || msg.content === 'Ping') {
        msg.reply('pong');
    }
    if (msg.content === 'beep' || msg.content === 'Beep') {
        msg.reply('boop');
    }})

client.login(process.env.TOKEN);
