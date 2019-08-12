const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user:{
        type: String,
        required: true,
    },
    bio: String,
    avatar:{
        type: String, //pega o caminho da foto
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId, //Formato do id do mongo
        ref: 'Dev',
    }],//podem ser varios
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }], //podem ser varios
}, 
{
    timestamps: true,
});

module.exports = model('Dev', DevSchema);