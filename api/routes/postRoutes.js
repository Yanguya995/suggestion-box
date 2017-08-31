'use strict'
module.exports = function(app){
    var post = require('../controllers/postController');

    app.route('/posts')
        .get(post.list_all_posts)
        .post(post.create_new_post);

    app.route('/posts/:postId')
        .get(post.view_a_post)
        .post(post.update_a_post)
        .delete(post.delete_a_post);
}