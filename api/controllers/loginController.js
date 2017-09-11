var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    jwt = require('jsonwebtoken');
    
secret = "2122232425262728292010";

exports.authenticate = function (req, res) {
    User.findOne({
            username: req.body.username
        },
        function (err, user) {
            if (err) {
                res.send(err)
            }
            else if(user === null) {
                res.send({
                    message: 'The username provided is not registered on our system'
                });
            }
            else if(user !== null) {
                if (req.body.password) {
                    var isValid = compareToUserPassword(user.password, req.body.password);
                    if (!isValid) {
                        res.json({
                            message: 'Please provide valid credentials'
                        });
                    } else {
                        var token = jwt.sign({
                                username: user.username,
                                email: user.email,
                                id: user._id
                            },
                            secret, {
                                expiresIn: '24h'
                            });
                        res.json({
                            message: 'User Authenticated successfully',
                            token: token
                        });
                    }
                }

            }
        });

    function compareToUserPassword(userPassword, bodyPassword) {
        //write password hashing algorithm..... 
        if (bodyPassword === userPassword) {
            return true;
        } else {
            return false;
        }
    }
}

exports.isLoggedIn = function(req, resp, next){
    if(req.body.token){
        next();
    
    } else {
        return res.json({message: 'Unathorized user'});
    }
}; 
