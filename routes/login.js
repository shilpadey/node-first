const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('userName').value)" action="/login" method="POST"><input type="text" name="username" id="userName"/><button type="submit">Login</button></form>`);
});

router.post('/login', (req, res, next) => {
    console.log(req.body.username);
    res.redirect('/');
})


module.exports = router;