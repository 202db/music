const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('[INFO] Bot Online!');
});
const MainClient = require("./muzio.js");
const client = new MainClient();

client.connect();

module.exports = client;

/**
 * @INFO
 * Coder  en francais par 202.sql
 * @INFO
 *  Support | https://discord.gg/WzQGA8A5
 * @INFO
 * N'enlever pas les crédits
 * @INFO
 */