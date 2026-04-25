const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/',             userController.getAll);
router.patch('/:id/toggle', userController.toggleEstado);

module.exports = router;
