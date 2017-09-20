'use strict'
module.exports = function(app){
var login = require('../controllers/loginController');
    app.route('/login')
    .post(login.authenticate);
    
    app.route('/login/v')
    .post(login.verfication);
}