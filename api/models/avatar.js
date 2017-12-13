var mongoose = require('mongoose');
var AvatarSchema = new mongoose.Schema({
    name: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
     createdDate: {
        type: Date,
        default: Date.now
    }
});

var Avatar = mongoose.model('Avatars', AvatarSchema);
module.exports = Avatar;