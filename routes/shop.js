const express = require('express');
const router = express.Router();


router.get('/product', (req, res, next) => {
    res.send('<h1>Hello to Node.js</h1>');
});

module.exports = router;