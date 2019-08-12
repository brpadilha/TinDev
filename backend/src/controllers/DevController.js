const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        const {
            user
        } = req.headers;
        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [{
                    _id: {
                        $ne: user
                    }
                },
                {
                    _id: {
                        $nin: loggedDev.likes
                    }
                },
                {
                    _id: {
                        $nin: loggedDev.dislikes
                    },
                }
            ],
        });
        return res.json(users);
    },

    async store(req, res) {
        const {
            username
        } = req.body;

        const userExists = await Dev.findOne({
            user: username
        }); //verifica se um usuário já existe

        if (userExists) {
            return res.json(userExists);
        } // se o usuário já existir, ele retorna o próprio

        const response = await axios.get(`https://api.github.com/users/${username}`); //para pegar os dados do usuário

        const {
            name,
            bio,
            avatar_url: avatar
        } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
};