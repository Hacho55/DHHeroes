const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


router.get('/', mainController.main);

router.get('/creditos', mainController.creditos);

router.get('*', mainController.otros);



module.exports = router;