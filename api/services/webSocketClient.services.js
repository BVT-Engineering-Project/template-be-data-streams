const WebSocket = require('ws');
const streams = require('../fetch/sseConnect');

class WebSocketClient {
    constructor(url) {
        this.url = url;
        this.ws = new WebSocket(url);
        this.ws.on('open', this.onOpen.bind(this));
        this.ws.on('message', this.onMessage.bind(this));
        this.ws.on('close', this.onClose.bind(this));
        this.ws.on('error', this.onError.bind(this));
    }

    onOpen() {
        console.log(`WebSocket connection established to ${this.url}`);
    }

    onMessage(data) {
        console.log(`Received data: ${data}`);
        const message = JSON.parse(data);
        if (message.data.length === 0) {
            console.log("TIDAK ADA DATA");
            streams.send({
                data: "MAAF Tidak ada data"
            });
        }
        // do something with the data
    }

    onClose() {
        console.log(`WebSocket connection closed to ${this.url}`);
    }

    onError(err) {
        console.log(`WebSocket error: ${err}`);
    }

    send(data) {
        this.ws.send(data);
    }
}

module.exports = WebSocketClient;