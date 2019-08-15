const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const server = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-5pegv.mongodb.net/omnistack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(express.json());
server.use(routes); //usando as configurações do arquivo routes

server.listen(3333); //localhost:3333
