var mongoose = require('mongoose');
var post = require('./post')
var ChatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'post'
    }    
});
var Chat = mongoose.model('Chats',ChatSchema);
module.exports = Chat;
