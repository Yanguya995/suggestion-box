var mongoose = require('mongoose'),
    Chat = mongoose.model('Chats');

exports.list_all_chats = function(req,res){
    Chat.find({}, function(err,chat){
        if(err)
            res.send(err)
        res.json(chat);
    })
}
exports.view_a_chat = function(req,res){
    chat.findById({_id:req.params.chatId},function(err,chat){
        if(err)
            res.send(err)
        res.json(chat);
    })
}
exports.create_a_chat = function(req,res){
    var new_chat = new Chat(req.body);
    new_chat.save(function(err,chat){
        if(err)
            res.send(err)
        res.json(chat);
    })
}
exports.update_a_chat = function(req,res){
    chat.findOneAndUpdate({id:req.params.chatId}, function(err,chat){
        if(err)
            res.send(err)
        res.json(chat);
    })
}
exports.delete_a_chat = function(req,res){
    Chat.findByIdAndRemove({_id:req.params.chatId},function(err,chat){
        if(err)
            res.send(err)
        res.json({message: 'Chat has been deleted successfully.'});
    })
}