var moongose = require('mongoose'),
    Post = moongose.model('Posts');

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
        res.json(post);
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