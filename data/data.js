var mongoose = require("mongoose");
var assert = require("assert");
var dbURL = "mongodb://localhost:27017/suggestionBoxDB";

mongoose.connect(dbURL,function(db,error){
assert.equal(error, null);
console.log("Database is connected");
});