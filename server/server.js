var env = process.env.NODE_ENV || 'development';
var config = require('../env/config')[env];  
var express = require('express'),
    port = process.env.PORT || 3000,
    User = require('../api/models/user'), //created model loading here
    Chat = require('../api/models/chat'),
    Avatar = require('../api/models/avatar'),
    Post = require('../api/models/post');
    bodyParser = require('body-parser');
    cors = require('cors');

var app = express();

app.use(cors(/* set whitlists and blacklists */));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Middleware that determines if a user should be granted access or not
//This is where we will be checking if the token provided is valid or not
app.use(function(req, res, next){
    if(req.body.username){
        next();
    }else{
        res.json({message: 'There is nothing in Body'})
    }
});

var loginRouter = require('../api/routes/loginRoutes');
loginRouter(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

//..............These should be protected by jwt...............

var userRoutes = require('../api/routes/userRoutes'); //importing route
userRoutes(app); //register the route

var chatRouter = require('../api/routes/chatRoutes');
chatRouter(app);

var avatarRouter = require('../api/routes/avatarRoutes');
avatarRouter(app);

var postRouter = require('../api/routes/postRoutes');
postRouter(app);