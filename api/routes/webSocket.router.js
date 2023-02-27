const express = require('express');
const router = express.Router();
const webSocketClientControllers = require('../controllers/webSocketClient.controller');

router.get('/', webSocketClientControllers.rootHome);
router.post('/send', webSocketClientControllers.connectSubscribe);

module.exports = router;