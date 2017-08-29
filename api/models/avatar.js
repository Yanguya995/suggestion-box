var mongoose = require('mongoose');

var AvatarSchema = new mongoose.Schema({
    name: String,
    user: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
});

var Avatar = mongoose.model('Avatar',AvatarSchema);
module.exports = Avatar;