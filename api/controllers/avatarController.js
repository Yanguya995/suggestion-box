var mongoose = require('mongoose'),
    Avatar = mongoose.model('Avatars');
    User = mongoose.model('Users');

    //hardcoded id from one of the users;
    user_id = "59a02884ffb7136a6f6b58f5";
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

exports.create_an_avatar = function(req, res){
    var  new_avatar = new Avatar({
        name : req.body.name,
        user: "59a02884ffb7136a6f6b58f5"
    });

    new_avatar.save(function(err,avatar){
        if(err)
            res.send(err)
        else{
            var populate = Avatar.findOne({title:/LOra/i})
            .populate('Users')
            .exec(function(err){
                if(err) return handleError(err)
                else{
                    var populateUser = User.findOne({_id:"59a02884ffb7136a6f6b58f5"},function(err,user){
                        if(err) return handleError(err)
                        user.avatar.push(new_avatar);
                        user.save(function(err){
                            if(err) return handleError(err)
                                res.json("Avatar created succsesfully"); 
                        });                        
                    });
                }    
                
            });

            
        }
    })            
}