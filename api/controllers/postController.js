var moongose = require('mongoose'),
    Post = moongose.model('Posts'),
    Avatar = mongoose.model('Avatars'),
    Chat = mongoose.model('Chats');

exports.list_all_posts = function(req,res){
     Post.find({}, function(err,post){
         if(err)
            res.send(err)
         res.json(post);
     });
}

exports.create_new_post = function(req,res){
    var new_post = new Post(req.body);
    new_post.save(function(err,post){
        if(err)
            res.send(err);
        else{
            var populate = Post.findOne({_id:new_post._id})
            .populate('Avatars')
            .exec(function(err){
                if(err)
                       return handleError(err)
                else{
                    var populateAvatar = Avatar.findOne({_id: req.body.avatar},
                    function(err, avatar){
                        if(err)
                            return handleError(err)
                        else if(avatar!==null){
                            avatar.post.push(new_post);
                            avatar.save(function (err){
                                if(err)
                                    return handleError(err)
                                else if(!err){
                                    res.json({
                                        message: 'Post created',
                                        status: 'Success'
                                    });
                                }
                            });
                        }
                    });
                    }
                }); 
        }
    });
}

 exports.view_a_post = function(req,res){
    Post.findById({_id:req.params.postId}, function(err,post){
        if(err)
            res.send(err)
        res.json(post);
    })
} 

exports.update_a_post = function(req,res){
    Post.findOneAndUpdate({_id:req.params.postId}, function(err,post){
        if(err)
            res.send(err)
        res.json(post);
    })
}

exports.delete_a_post = function(req,res){
    Post.findByIdAndRemove({_id:req.params.postId},function(err,post){
        if(err)
            res.send(err)
        res.json({message: 'Post has been deleted successfully.'});
    })
}