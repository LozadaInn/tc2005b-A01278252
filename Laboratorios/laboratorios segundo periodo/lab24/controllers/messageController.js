const messageModel = require('../models/messageModel');

exports.getMessages = (req, res) => {
    const messages = messageModel.getMessages();
    res.render('index', { messages });
};

exports.addMessage = (req, res) => {
    const message = req.body.message;
    messageModel.addMessage(message);

    // Responder con JSON para AJAX
    res.json({ message: message });
};

// This module defines a message controller that handles HTTP requests related to messages.
// It retrieves messages from the model and renders them in a view,
// and adds new messages via a POST request, responding with JSON for AJAX requests.
// It uses the message model to retrieve and add messages, and renders them using EJS templates.
