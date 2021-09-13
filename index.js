console.log(`Hello from Node.js ${process.version}!`);
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = process.env.DISCORD_TOKEN;


client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
});

client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        msg.channel.send(msg.content.split('').reverse().join(''));
    }
});

client.login(token);




