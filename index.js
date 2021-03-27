const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

const loganPaulGifs = [
  'https://media.giphy.com/media/fV2f3GMlduRgjaCLTD/giphy.gif',
  'https://media.giphy.com/media/YE2e27KCoNmv9kCCWb/giphy.gif',
  'https://media.giphy.com/media/3o6fJ7zANFIpFTKJ8Y/giphy.gif',
  'https://media.giphy.com/media/aSBdlJzcUJBUhZL05R/giphy.gif',
  'https://media.giphy.com/media/i2zPx3yaGiRxxZ8T6Q/giphy.gif',
  'https://media.giphy.com/media/xT39CTlAmWWcS7LoXu/giphy.gif',
  'https://media.giphy.com/media/l2JhKYhjSUW55CWFG/giphy.gif',
  'https://media.giphy.com/media/d1E1DqApaGVgXuFi/giphy.gif',
  'https://media.giphy.com/media/71dknhqpgJl0Q/giphy.gif',
  'https://media.giphy.com/media/3o6fIRSzrAfqnMcRuE/giphy.gif',
  'https://media.giphy.com/media/UoXrCKCVuDQAVAt13D/giphy.gif',
  'https://media.giphy.com/media/xAGmgIso7es7yWWhm2/giphy.gif',
  'https://media.giphy.com/media/mG1NCrSTHT2J8xY4ZO/giphy.gif',
];

client.on('message', function (message) {
  const messageStrings = message.content.split(' ');

  const loganPaulMessageRegEx = /^\b(lp|logan|mav|maverick|greatness|login|boosted)\b/i;

  const randomGifIndex = Math.floor(Math.random() * loganPaulGifs.length);

  messageStrings.some(string => {
    if (loganPaulMessageRegEx.test(string)) {
      return message.channel.send(loganPaulGifs[randomGifIndex]);
    }
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);
