var mongoose = require('mongoose');
var ChatSchema = new mongoose.Schema({
    title: String,
    post: [{type:mongoose.Schema.Types.ObjectId, ref:'Post'}]
    
},{useMongoClient:true});
var Chat = mongoose.model('Chats',ChatSchema);
module.exports = Chat;
