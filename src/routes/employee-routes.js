const { create,getAll } = require('../controllers/employee-controllers');

const express = require('express');
const router = express.Router();

router.post('/', create);
router.get('/', getAll);

module.exports = router;