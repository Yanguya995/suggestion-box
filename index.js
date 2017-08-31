// server = require('./server/server');
// database = require('./data/data');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/user'), //created model loading here
  Chat = require('./api/models/chat'),
  Avatar = require('./api/models/avatar'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/suggestionBoxDB',{useMongoClient:true}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./api/routes/userRoutes'); //importing route
userRoutes(app); //register the route

var chatRouter = require('./api/routes/chatRoutes');
chatRouter(app);

var avatarRouter =require('./api/routes/avatarRoutes');
avatarRouter(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
