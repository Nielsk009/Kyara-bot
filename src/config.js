module.exports = {
  Client: {
  token: process.env.token,
  intents: "all",
  prefix: "!!",
  database: {
    type: "default",
    tables: ["main"],
    path: "./database/",
    promisify: false
  },
  autoUpdate: true,
  respondOnEdit: {
    command: true,
    timelimit: 300000,
   }
 }
}