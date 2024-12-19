const commonApi = require('express').Router();
const commonController = require('../controllers/CommonController');
//const { jwtAuthentication } = require('../middlewares/passport.middleware');

commonApi.get('/word-pack/total', commonController.getTotalWordPack);

module.exports = commonApi;
