require('../api/models/user');
require('../api/models/avatar');
require('../api/models/chat');
require('../api/models/post');

var mongoose = require('mongoose');
console.log(mongoose.connection.readyState);
var env = process.env.NODE_ENV || 'development';
var config = require('../env/config')[env];
var express = require('express'),
    port = process.env.PORT || 3000,
    jwt = require('jsonwebtoken'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    loginController = require('../api/controllers/loginController'),
    passport = require('passport'),
    passportJWT = require('passport-jwt'),
    extractJWT = passportJWT.ExtractJwt,
    jwtStrategy = passportJWT.Strategy,
    User = require('../api/models/user'),
    jwtOptions = {
        jwtFromRequest: extractJWT.fromHeader('authorization'),
        secretOrKey: config.secret
    };

var chatRouter = require('../api/routes/chatRoutes');
var avatarRouter = require('../api/routes/avatarRoutes');
var userRoutes = require('../api/routes/userRoutes'); //importing route
var loginRouter = require('../api/routes/loginRoutes');
var postRouter = require('../api/routes/postRoutes');

var app = express();
//Passport Authentication strategy
var strategy = new jwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('Payload received', jwt_payload);
    var currentUser = User.findById(jwt_payload.id, function (err, user) {
        if (user) { next(null, user) }
        else {
            next, (null, false);
        }
    });
});

app.use(cors(/* set whitlists and blacklists */));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
passport.use(strategy);
app.use(passport.initialize());

function isLoggedIn() {
    app.use(passport.authenticate('jwt', { session: false }), function (req, res, next) {
        next();
    });
}
console.log(mongoose.connection.readyState);
//Middleware that determines if a user should be granted access or not
//This is where we will be checking if the token provided is valid or not
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
//..............These should be protected by jwt...............
loginRouter(app);
userRoutes(app, isLoggedIn()); //register the route
avatarRouter(app, isLoggedIn());
postRouter(app, isLoggedIn());
chatRouter(app, isLoggedIn());
