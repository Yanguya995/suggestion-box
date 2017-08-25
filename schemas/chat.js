var mongoose = require('mongoose');
var ChatSchema = new mongoose.Schema({
    title: String,
    post: [{type:mongoose.Schema.Types.ObjectId, ref:'Post'}]
    
},{useMongoClient:true});
var Chat = mongoose.model('Chat',ChatSchema);
module.exports = Chat;
