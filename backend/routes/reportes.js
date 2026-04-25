const router = require('express').Router();
const reporteController = require('../controllers/reporteController');

router.get('/resumen', reporteController.getResumen);

module.exports = router;
