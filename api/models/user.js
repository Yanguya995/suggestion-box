var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: {
        type:String
    },
    password: {
        type:String
    },
    occupation: {
        type:String
    },
    date_of_birth: {
        type:Date
    },
    gender:{
        type:String
    },
    email: {
        type:String
    },    
    avatar: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Avatars'
    }],
    createdDate: {
        type: Date, 
        default: Date.now
    }
});

var User = mongoose.model('Users', UserSchema);
module.exports = User;