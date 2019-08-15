const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username }); //verifica se já existe um usuário com esse username no banco de dados

    if (userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    ); //pega os dados na api do github

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  }
};
