'use strict';
module.exports = function (app, data) {
    var user = require('../controllers/userController');
    app.route('/users')
        .get(user.list_all_users)

    app.route('/users/:userId')
        .get(user.view_a_user)
        .put(user.update_a_user)
        .delete(user.delete_a_user);

}