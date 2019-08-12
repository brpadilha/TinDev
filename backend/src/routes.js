const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();



//GET, POST, PUT, DELETE
//get pegar alguma coisa, post - postar, put atualizar e delete deletar

routes.get("/", (req, res) => {
    //req - trás todas as requisições referentes ao usuário
    //res - objeto que irá trazer uma res ao cliente
    return res.json({
        mensagem: `Cachorro ${req.query.name}`
    });
});

routes.post('/devs', (req, res) =>{
    
    return res.json(req.body);
});


module.exports = routes; //exportando