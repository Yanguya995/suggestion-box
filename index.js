// server = require('./server/server');
// database = require('./data/data');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  User = require('./api/models/user'), //created model loading here
  Chat = require('./api/models/chat'),
  Avatar = require('./api/models/avatar'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://njabulothwala23:TomasCook23%3F@cluster0-shard-00-00-pdqru.mongodb.net:27017,cluster0-shard-00-01-pdqru.mongodb.net:27017,cluster0-shard-00-02-pdqru.mongodb.net:27017/suggestion-box-db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useMongoClient:true}); 

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
