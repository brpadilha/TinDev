const express = require('express');
const routes = express.Router();
const DevController = require('./controllers/DevController');
const likeController = require('./controllers/likeController');
const DislikeController = require('./controllers/DislikeController');

//GET, POST, PUT, DELETE
//get pegar alguma coisa, post - postar, put atualizar e delete deletar

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', likeController.store);

routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes; //exportando