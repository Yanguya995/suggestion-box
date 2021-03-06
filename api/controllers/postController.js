var mongoose = require('mongoose');
 var Post = mongoose.model('Posts'),
 Avatar = mongoose.model('Avatars'),
    Chat = mongoose.model('Chats');

exports.list_all_posts = function (req, res) {
    Post.find({}, function (err, post) {
        if (err)
            res.send(err)
        res.json(post);
    });
}


exports.view_a_post = function (req, res) {
    Post.findById({ _id: req.params.postId }, function (err, post) {
        if (err)
            res.send(err)
        res.json(post);
    })
}

exports.create_new_post = function (req, res) {
    var new_post = new Post(req.body);
    new_post.save(function (err, post) {
        if (err)
            res.send(err);
        else {
            var populate = Post.findOne({ _id: new_post._id })
                .populate('Chats')
                .exec(function (err) {
                    if (err)
                        return handleError(err)
                    else {
                        var populateChat = Chat.findOne({ _id: req.body.chat },
                            function (err, chat) {
                                if (err)
                                    return handleError(err)
                                else if (chat !== null) {
                                    chat.post.push(new_post);
                                    chat.save(function (err) {
                                        if (err)
                                            return handleError(err)
                                        else if (!err) {
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


exports.update_a_post = function (req, res) {
    Post.findOneAndUpdate({ _id: req.params.postId }, function (err, post) {
        if (err)
            res.send(err)
        res.json(post);
    })
}

exports.delete_a_post = function (req, res) {
    Post.findByIdAndRemove({ _id: req.params.postId }, function (err, post) {
        if (err)
            res.send(err)
        res.json({ message: 'Post has been deleted successfully.' });
    })
}