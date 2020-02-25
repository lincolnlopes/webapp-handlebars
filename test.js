const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');

const sequelize = new Sequelize('test','root','123456',{
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || "3306",
  dialect: 'mysql'
})

const dbName = process.env.DB_SCHEMAS || "test";
/*
mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "123456",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database create or successfully checked");
        process.exit(0);
    })
})
*/
sequelize.authenticate()
  .then(() => console.log('Conectado com sucesso!'))
  .catch((err) => console.log(`Falha ao conectar: ${err}`))

  const Postagens = sequelize.define('Posts', {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    }
  })
  // Postagens.sync({force:true})

  const Usuarios = sequelize.define('Users', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    }
  })

//Usuarios.sync({force:true})
