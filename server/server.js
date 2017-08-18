var express = require('express');
var server = express();
var port = 3000;

server.get('/', function(request,response){
   response.send('App Works')
}).listen(port,()=>{
    console.log("Application is running on Port "+ port);
});
