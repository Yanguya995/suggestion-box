var env = process.env.NODE_ENV || 'development';
var config = require('../env/config')[env];
mongoose = require('mongoose'),
mongoose.Promise = global.Promise;
mongoose.connect(config.dburl,{useMongoClient:true}); 