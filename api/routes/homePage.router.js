const express = require('express');
const router = express.Router();

const homePageController = require('@controllers/homePage.controller');

router.get('/', homePageController.homePageView);

module.exports = router;