// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token

//let buff = new Buffer(data);
//let base64data = buff.toString('base64');
let token = Buffer.from(inputString, 'base64').toString('ascii');
client.login(token);