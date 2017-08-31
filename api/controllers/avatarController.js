var mongoose = require('mongoose'),
    Avatar = mongoose.model('Avatars');

exports.list_all_avatars = function(req,res){
    Avatar.find({},function(err,avatar){
        if(err)
            res.send(err)
        res.json(avatar);
    })
}

exports.view_an_avatar = function(req,res){
    Avatar.findById({_id: req.param.avatarId},function(err,avatar){
        if(err)
            res.send(err)
        res.json(avatar);
    })
}

exports.create_an_avatar = function(req,res){
    var  new_avatar = new Avatar(req.body);
    new_avatar.save(function(err,avatar){
        if(err)
            res.send(err)
        res.json(avatar);
    })
}
