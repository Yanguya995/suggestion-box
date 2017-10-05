var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.list_all_users = function(req,res){
    User.find({},function(err,user){
        if(err)
            res.send(err)
        res.json(user);
    })
}
exports.view_a_user = function(req,res){
    User.findById({_id:req.params.userId},function(err,user){
        if(err)
            res.send(err)
        res.json(user);
    })
}

exports.update_a_user = function(req,res){
    User.findOneAndUpdate({_id: req.params.userId},req.body,{new:true},function(err,user){
        if(err)
            res.send(err)
        res.json(user);
    })
}
exports.delete_a_user = function(req,res){
    User.remove({_id: req.params.userId},function(err,user){
        if(err)
            res.send(err)
        res.json({message: 'User deleted successfully.'});
    })
}