const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Programación de Vanguardia</h1>
    <h2>Demo DevOps</h2>
    <p>Versión 3.0</p>
`); });

app.get("/status", (req, res) => {
  res.json({
    status: "ok",
    version: "3.0"
  });
});

module.exports = app;