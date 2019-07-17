const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category');

router.get('/', categoryController.getIndexCategory);

module.exports = router;