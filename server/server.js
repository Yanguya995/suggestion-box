var env = process.env.NODE_ENV || 'development';
var config = require('../env/config')[env];  
var express = require('express'),
    port = process.env.PORT || 3000,
    User = require('../api/models/user'), //created model loading here
    Chat = require('../api/models/chat'),
    Avatar = require('../api/models/avatar'),
    Post = require('../api/models/post');
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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