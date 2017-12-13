var env = process.env.NODE_ENV || 'development';
var config = require('../../env/config')[env];
var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    passportJWT = require('passport-jwt'),
    extractJWT = passportJWT.ExtractJwt,
    jwtStrategy = passportJWT.Strategy,
    User = require('../../api/models/user'),

    jwtOptions = {
        jwtFromRequest: extractJWT.fromHeader('authorization'),
        secretOrKey: config.secret
    };

var strategy = new jwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('Payload received', jwt_payload);

    var user = users[_.findIndex(users, {
        id: jwt_payload.id
    })];
    if (user) {
        next(null, user)
    } else {
        next,
        (null, false);
    }
});
exports.authenticate = function (req, res) {
    User.findOne({
            email: req.body.username
        },
        function (err, user) {
            if (err) {
                res.send(err)
            } else if (user === null) {
                res.send({
                    message: 'The username provided is not registered on our system'
                });
            } else if (user !== null) {
                console.log('Console Log');
                if (req.body.password) {
                    var isValid = compareToUserPassword(user.password, req.body.password);
                    if (!isValid) {
                        res.json({
                            message: 'Please provide valid credentials'
                        });
                    } else if (isValid) {
                        var payload = {
                            id: user.id
                        }
                        var token = jwt.sign(payload, jwtOptions.secretOrKey);
                        console.log(token);
                        res.json({
                            message: 'Ok',
                            token: token,
                            user: user.id
                        });
                    } else {
                        res.status(401).json({
                            message: ' Passwords did not match',
                        });
                    }
                }
            }

        });
}

function compareToUserPassword(userPassword, bodyPassword) {
    //write password hashing algorithm..... 
    if (bodyPassword === userPassword) {
        return true;
    } else {
        return false;
    }
}

exports.create_a_user = function(req,res){
    var new_user = new User(req.body);
    console.log(req.body);
    new_user.save(function(err,user){
        if(err)
            res.send(err)
        res.json({success: true, message: 'user has been created'});
    })
}