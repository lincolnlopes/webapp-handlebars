const express = require("express");
// const handlebars = require("express-handlebars");

const app = express();

app.get("/", (req, res) => res.send("Hello Wolrd!"));
app.get("/ola/:nome", (req, res) => res.send(`<h1>Olá ${req.params.nome}!</h2>` ));
app.get("/ola/:nome/:cargo", (req, res) => res.send(`<h1>Olá ${req.params.nome}!</h2>`));


app.listen(3001, function(){
  console.log("Servidor rodando na url: http://localhost:3001");
});
