const { create } = require('../controllers/employee-controllers');

const express = require('express');
const router = express.Router();

router.post('/', create);

module.exports = router;