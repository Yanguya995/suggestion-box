/* var env = process.env.NODE_ENV || 'development';
var config = require('../env/config')[env];*/
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/suggestionBoxDB",{useMongoClient:true}); 
console.log(mongoose.connection.readyState);
