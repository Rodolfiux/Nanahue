const { request, response } = require('express');
const express = require('express');

const router = express.Router();

const limoneraController = require('../controllers/limonera_controller');

router.get('/list/:limon_id', limoneraController.getlist);

router.get('/list', limoneraController.getlist);

router.get('/agregar', limoneraController.getadd);

router.post('/agregar', limoneraController.postadd);

module.exports = router;