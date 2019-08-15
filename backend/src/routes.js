const express = require("express");
const routes = express.Router();
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DisLikeController = require("./controllers/DislikeController");

routes.get("/devs", DevController.index);

routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DisLikeController.store);

module.exports = routes;
