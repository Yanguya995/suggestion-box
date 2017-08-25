var mongoose = require('mongoose');
var assert = require('assert');
var dbURL = 'mongodb://localhost/suggestionBoxDB';
mongoose.connect(dbURL);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function () {

//     var Cat = mongoose.model('Cat', { name: String });
//     var kitty = new Cat({ name: 'Zildjan' });
//     kitty.save(function (err) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log('meow');
//         }
//     });
//     Cat.find(function (err, cats) {
//         if (err)
//             return console.error(err);
//         console.log(cats);
//     })
// });

// mongoose.connect(dbURL,function(db,error){
// assert.equal(error, null);
// console.log("Database is connected");
// });
//Create User Schema
var User = require('../schemas/user.js');

var Avatar = require('../schemas/avatar.js');
var Post = require('../schemas/post.js');
var Chat = require('../schemas/chat.js');
//

var testUser = new User({name:'Vincent',username:'vinneh', password:'testpass', age:'27',email:'test@example.co.za' });
testUser.save(function(err){
    if(err) console.log(err);
    else console.log(testUser);
});
//
var testAvatar = new Avatar({name:'vin',user: testUser});
testAvatar.save(function(err){
    if(err) console.log(err);
    else console.log(testAvatar);
});
//
var testChat = new Chat({title:'Test Chat'});
testChat.save(function(err){
    if(err) console.log(err);
    else console.log(testChat);
});

//
var testPost = new Post({avatar: testAvatar});
testPost.save(function(err){
    if(err) console.log(err);
    else console.log(testPost);
});
