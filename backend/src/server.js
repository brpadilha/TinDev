const express = require ("express");
const rotas = require("./routes");//pegando do arquivo routes
const server = express(); //cria um servidor


server.use(rotas); //usar a configuração de outro módulo ou arquivo

server.listen(3333); //servidor irá ouvir a porta 3333 : localhost:3333