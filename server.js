const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Programación de Vanguardia</h1>
    <h2>Universidad de la Ciudad de Buenos Aires</h2>
    <h2>Demo DevOps</h2>
    <p>Versión 2.1</p>
`); });

app.get("/status", (req, res) => {res.json({
    status: "ok",
    version: "2.1"
}); });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});