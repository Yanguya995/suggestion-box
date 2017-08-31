var mongoose = require('mongoose'),
    user = require('./user');

var AvatarSchema = new mongoose.Schema({
    name: {
        type:String
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

var Avatar = mongoose.model('Avatars',AvatarSchema);
module.exports = Avatar;