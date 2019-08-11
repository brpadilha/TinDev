const express = require('express');

const rotas = express.Router();



//GET, POST, PUT, DELETE
//get pegar alguma coisa, post - postar, put atualizar e delete deletar

rotas.get("/", (requisicao, resposta) => {
    //requisicao - trás todas as requisições referentes ao usuário
    //resposta - objeto que irá trazer uma resposta ao cliente
    return resposta.json({
        mensagem: `Cachorro ${requisicao.query.name}`
    });
});

module.exports = rotas; //exportando