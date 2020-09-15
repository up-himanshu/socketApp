"use strict";

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }

  onMessage(message) {
    console.log(message);
    this.socket.broadcastToAll("message", message);
  }

  onClose(message) {
    console(message);
  }
}

module.exports = ChatController;
