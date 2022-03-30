module.exports = {
  Bot: {
  token: process.env.token,
  intents: "all",
  prefix: "!!",
  database: {
    type: "default",
    tables: ["Kyarabot"],
    path: "./database/",
    promisify: false
  },
  autoUpdate: true,
  respondOnEdit: {
    command: true,
    timelimit: 300000,
  }
},
  Cores: {
    walking: ["blink", "dim", "fgWhite"],
    failedWalking: {
        name: ["bright", "fgYellow", "underline"], 

        text: ["bright", "fgRed"]
    },
    typeError: {
        command: ["bright", "fgYellow"],
        type: ["fgYellow"],
        text: ["bright", "fgRed"]
    },
    failLoad: {
        command: ["bright", "fgMagenta"],
        type: ["fgRed"],
        text: ["bright", "fgOrange"],
    },
    loaded: {
        command: ["bright", "fgGreen"],
        type: ["bright", "fgBlue"],
        text: ["bright", "fgCyan"]
    },
}
}