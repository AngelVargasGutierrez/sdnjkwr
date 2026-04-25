const router = require('express').Router();
const medicamentoController = require('../controllers/medicamentoController');

router.get('/',    medicamentoController.getAll);
router.get('/:id', medicamentoController.getOne);
router.post('/',   medicamentoController.create);
router.put('/:id', medicamentoController.update);
router.delete('/:id', medicamentoController.remove);

module.exports = router;
