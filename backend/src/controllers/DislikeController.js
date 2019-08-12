const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) { //sempre que usar awayt tem q usar async

        const {
            user
        } = req.headers;
        const {
            devId
        } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json({
                error: 'Dev not exists'
            }); //400 significa que o usuário fez algo errado
        }

       
        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();
        return res.json(loggedDev);
    }
};