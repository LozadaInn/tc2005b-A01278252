class MessageModel {
    constructor() {
        this.messages = [];
    }

    addMessage(message) {
        this.messages.push(message);
    }

    getMessages() {
        return this.messages;
    }
}

module.exports = new MessageModel();
// This module defines a MessageModel class that manages a list of messages.
// It allows adding messages and retrieving the list of messages.