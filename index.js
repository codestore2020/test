const Discord = require('discord.js');
const client = new Discord.Client();
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Visualstudiocode", { type: "WATCHING" });
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welkom-bot-2');
    if (!channel) return console.log("de channel is niet gevonden!!!");
    
    let data = await canva.welcome("", { link: "https://www.d5websoft.com/wp-content/uploads/2018/04/website-development-banner.png"});
    
    const attachment = new Discord.MessageAttachment(
        data,
        "welcome-image.png"
    );

    channel.send(
        `Welkom op de server ${member.user.username}!`,
        attachment
    );
});

client.login('NzM5Nzk0NTkxOTIxNzMzNjky.XyfpZw.2V0oQ9odVA6EhWWHfBFbkeTd-Lg');