var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    username: {type:String,unique:true},
    password: String,
    age: String,
    email: String,

},{useMongooseClient: true});

var User = mongoose.model('Users',UserSchema);

module.exports = User;