// Puxar a biblioteca do aoijs
const kyarabot = require('aoi.js'); 

const config = require('./src/ClientFiles/config.js'); 

// Fazer o bot ligar
const bot = new kyarabot.Bot(config.Bot); 

// Requerindo todos os arquivos do bot
require("./src/ClientFiles/Callbacks")(bot)
require("./src/ClientFiles/Variaveis")(bot) 

//Carregar todos os comandos da kyara
const loader = new kyarabot.LoadCommands(bot)
loader.load(bot.cmd, "./src/comandos/") 

// Colocar cor no console.
loader.setColors(config.Cores);
