var mongoose = require('mongoose')

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
        ref: 'Chats'
    }],
    post:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }]
});

var Avatar = mongoose.model('Avatars',AvatarSchema);
module.exports = Avatar;