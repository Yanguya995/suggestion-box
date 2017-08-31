var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: {
        type:String
    },
    username: { 
        type: String, 
        unique: true 
    },
    password: {
        type:String
    },
    date_of_birth: {
        type:Date
    },
    email: {
        type:String
    },    
    avatar: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Avatars'
    }]
});

var User = mongoose.model('Users', UserSchema);
module.exports = User;