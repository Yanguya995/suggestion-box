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
        secretOrKey :config.secret
    };
    
    var strategy = new jwtStrategy(jwtOptions, function(jwt_payload, next){
    console.log('Payload received', jwt_payload);
    
    var user = users[_.findIndex(users, {id:jwt_payload.id})];
        if(user){ next(null, user)}
        else{ next,(null, false);
        }
    });

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
                    } else if(isValid) {
                        var payload = {id : user.id}
                        var token = jwt.sign(payload, jwtOptions.secretOrKey);
                        res.json({message:'Ok', token: token});
                    } else { 
                        res.status(401).json({message: ' Passwords did not match',});
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

exports.verfication = function(req, res, next){
    console.log('is Logged in ?')
    if(req.body.token){
        jwt.verify(token, secret, function(err, decoded){            
            if(err) 
                return handleError(err);
            else{
                req.decoded = decoded;
                next();
            }        
        });        
        
    
    } else {
        return res.json({message: 'Unathorized user'});
    }
}
