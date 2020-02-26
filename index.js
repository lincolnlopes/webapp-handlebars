const express = require("express");
//const handlebars = require("express-handlebars");
const hbs = require("express-hbs")
const path = require('path');

const Sequelize = require('sequelize');

const app = express();

app.use(express.urlencoded({ extended: false }));

// Config
  // Template Engine
  app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + '/views/layouts/main.hbs',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts'
  }));
  app.set('view engine', 'hbs');

  // Conexão com Banco de Dados
  const sequelize = new Sequelize('test','root','123456',{
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    dialect: 'mysql'
  });

  //Configs. de Diretório Público
  app.use(express.static(path.join(__dirname, 'public')));


app.get("/cadastro", (req, res) => res.render('formulario'));
app.post("/cadastro/add", (req, res) => res.send(`<h1>Cadastro efetuado com sucesso!</h2>` ));
app.get("/", (req, res) => res.send("Hello Wolrd!"));
app.get("/ola/:nome", (req, res) => res.send(`<h1>Olá ${req.params.nome}!</h2>` ));
app.get("/ola/:nome/:cargo", (req, res) => res.send(`<h1>Olá ${req.params.nome}!</h2>`));


app.listen(3001, function(){
  console.log("Servidor rodando na url: http://localhost:3001");
});
