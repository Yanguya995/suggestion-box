var mongoose = require('mongoose')
    //user = require('./user');

var AvatarSchema = new mongoose.Schema({
    name: {
        type:String
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    chat:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }],
    post:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }]
});

var Avatar = mongoose.model('Avatars',AvatarSchema);
module.exports = Avatar;