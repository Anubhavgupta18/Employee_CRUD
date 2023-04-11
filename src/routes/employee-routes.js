const { create,getAll,destroy,get,update } = require('../controllers/employee-controllers');

const express = require('express');
const router = express.Router();

router.post('/', create);
router.get('/', getAll);
router.delete('/:id', destroy);
router.get('/:id', get);
router.patch('/:id', update);

module.exports = router;