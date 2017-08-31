'use-strict'
module.exports = function(app){
    var avatar = require('../controllers/avatarController');

    app.route('/avatars')
        .get(avatar.list_all_avatars)
        .post(avatar.create_an_avatar);
}