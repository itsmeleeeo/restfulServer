'use-strict'

module.exports = (app) => {
    let messages = require('../controller/msgController');

    app.route('/message')
    .get(messages.list_all_message)
    .post(messsages.create_a_message);

    app.route('message/:msgId')
    .get(messages.read_a_message)
    .put(messages.update_a_message)
    .delete(message.delete_a_message);
};