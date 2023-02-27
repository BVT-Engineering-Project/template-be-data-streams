const webSocketClient = require('../services/webSocketClient.services');
const wsClient = new webSocketClient('wss://external-backend.staging.nodeflux.io/streamer/api/v1/ws');

class WebSocketClientControllers {
    static rootHome(req, res) {
        res.send('WebSocket client is running');
    }
    static connectSubscribe(req, res) {
        const data = {
            "type": "subscribe",
            "params": {
                "channels": req.body.channels
            }
        };
        wsClient.send(JSON.stringify(data));
        res.send('Data sent to WebSocket server');
    }
}
module.exports = WebSocketClientControllers;