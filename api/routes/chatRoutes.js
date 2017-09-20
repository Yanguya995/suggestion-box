'use scrict'
module.exports = function(app, data){
    var chat  = require('../controllers/chatController');
        login = require('../controllers/loginController');

    app.route('/chats')
        .get(chat.list_all_chats)
        .post(chat.create_a_chat);    

    app.route('/chats/:chatId')
        .get(chat.view_a_chat)
        .put(chat.update_a_chat)
        .delete(chat.delete_a_chat);
}
