const express = require('express');
const path = require('path');
const productControllers = require('../controllers/products');

const router = express.Router();

router.get('/contactus', productControllers.getContacts);

router.post('/contactus', productControllers.postContacts)

module.exports = router;