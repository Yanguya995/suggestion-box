'use-strict'
module.exports = function (app, data) {
    var avatar = require('../controllers/avatarController');
    app.route('/avatars/:userId')
        .get(avatar.list_user_avatars)
        .post(avatar.create_an_avatar);
}