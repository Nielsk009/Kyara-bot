module.exports = {
  name: "botinfo",
  code: `
$author[1;informações da kyara;$userAvatar[$clientID]]
$description[1; ( <:Megaphone:957666374673629194> ) **・** Oie, tudo bom eu sou a ( **\`Kyara\`** ) uma simples bot brasileira com o objetivo de espalhar alegria para todos.

( <:pessoas:957762092784574515> ) **・** Já fazem [ **\`$get[uptime]\`** ] que estou gerenciando [ **\`$servercount servidores\`** ] que contém [ **\`$allMembersCount usuários\`** ], tenho sono.

( <:nuvem:957971503234822154> ) **・** Eu estou usando [ **\`$abbreviate[$truncate[$ram]]mb / 1024mb\`** ] de minha memória é estou usando [ **\`$cpu% / 100%\`** ] de meu processamento com a latência de [ **\`$pingms\`** ]

( <:livro:957953664956379157> ) **・** Eu fui criada em **[Javascript](https://www.google.com/search?q=Javascript)** utilizando a biblioteca **[Aoi.js](https://aoi.leref.ga)** e estou utilizando a database padrão da biblioteca.

( <:github:958723025870655508> ) **・** Você sabia que eu sou Open source, para ver meus código acesse meu [github](https://github.com/Nielsk009/Kyara-bot) e contribua com minha evolução.
]
$color[1;#ca4246]

$let[uptime; $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;days;dias;1];day;dia;1];hours;horas;1];hour;hora;1];minutes;minutos;1];minute;minuto;1];seconds;segundos;1]]
`
}