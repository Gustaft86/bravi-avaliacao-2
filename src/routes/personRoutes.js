const express = require('express');
const personController = require('../controllers/PersonController');

const router = express.Router();

router.post('/', personController.create);
router.get('/', personController.getAll);
router.get('/:id', personController.getById);
router.put('/:id', personController.update);
router.delete('/:id', personController.delete);

module.exports = router;
