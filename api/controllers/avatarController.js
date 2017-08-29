var mongoose = require('mongoose'),
    Avatar = mongoose.model('Avatars');

exports.list_all_users = function(req,res){
    Avatar.find({},function(err,avatar){
        if(err)
            res.send(err)
        res.json(avatar);
    })
}

