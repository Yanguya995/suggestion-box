var mongoose = require('mongoose');
var PostSchema = mongoose.Schema({
    //avatar: {type:mongoose.Schema.Types.ObjectId, ref:'Avatar'},
    createdDate: {type: Date, default: Date.now},
    body:String,
    likes: Number,
    tags: [String]
});
var Post  = mongoose.model('Posts',PostSchema);
module.exports = Post;