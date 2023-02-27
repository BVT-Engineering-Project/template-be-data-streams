const express = require('express');
const router = express.Router();

const homePageRouter = require('@routes/homePage.router');
const wsRouter = require('../routes/webSocket.router');

router.use('/api', homePageRouter);
router.use('/ws', wsRouter);

module.exports = router;
