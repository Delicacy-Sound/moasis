///

const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const { TOKEN, PREFIX } = require('./settings/config.json');
const connections = new Map();

/// 

client.on("ready", () =>{
  console.log('Logged as Moasis')
  client.user.setActivity("Testing", {
      type: "STREAMING",
      url: "https://www.twitch.tv/nateales"
  })
});

///

client.login(TOKEN)
