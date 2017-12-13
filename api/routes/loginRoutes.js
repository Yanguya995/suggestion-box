'use strict'
module.exports = function(app){
var login = require('../controllers/loginController');
    app.route('/login')
    .post(login.authenticate);
    
    app.route('/login/reg')
    .post(login.create_a_user);
}