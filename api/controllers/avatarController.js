var mongoose = require('mongoose');
var Avatar = mongoose.model('Avatars');
var User = mongoose.model('Users');

exports.list_user_avatars = function (req, res) {
    Avatar.find({user: req.params.userId}, function (err, avatar) {
        if (err)
            res.send(err)
        res.json(avatar);
    })
}

exports.view_an_avatar = function (req, res) {
    Avatar.findById({
        _id: req.param.avatarId
    }, function (err, avatar) {
        if (err)
            res.send(err)
        res.json(avatar);
    })
}

exports.create_an_avatar = function (req, res) {
    var new_avatar = new Avatar(req.body);
    new_avatar.save(function (err, avatar) {
        if (err)
            res.send(err)
        else {
            var populate = Avatar.findOne({
                    _id: new_avatar._id
                })
                .populate('Users')
                .exec(function (err) {
                    if (err) return handleError(err)
                    else {
                        var populateUser = User.findById({
                            _id: req.body.user
                        }, function (err, user) {
                            if (err) console.log(err)
                            user.avatar.push(new_avatar);
                            user.save(function (err) {
                                if (err)
                                    return handleError(err)
                                res.json("Avatar created succsesfully");
                            });
                        });
                    }

                });
        }
    })
}