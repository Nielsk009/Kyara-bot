// Importando a biblioteca aoijs
const kyara = require('aoi.js')

// Imprtando as configurações do client
const config = require('./src/config.js');

// Construindo a estrutura do client(Kyara)
const client = new kyara.Bot(config.Client)

// Requerindo os arquivos do client
require("./src/Callbacks")(client)
require("./src/Variaveis")(client)
require("./src/Emojis")(client)

// Base Handler do client
const load = new kyara.LoadCommands(client)
load.load(client.cmd, "./comandos/")
load.setColors(load.themes.default)