const express = require('express');
const contactController = require('../controllers/ContactController');

const router = express.Router();

router.post('/', contactController.create);
router.get('/', contactController.getAll);
router.get('/:id', contactController.getById);
router.put('/:id', contactController.update);
router.delete('/:id', contactController.delete);

module.exports = router;
