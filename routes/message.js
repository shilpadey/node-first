const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('message.txt', (err,data) => {
        if(err) {
            console.log(err);
        }
        res.send(`${data}<form onsubmit="document.getElementById('userName').value = localStorage.getItem('username')" action="/" method="POST">
        <input type="hidden" name="username" id="userName"/>
        <input type="text" name="msg">
        <button type="submit">Send</button>
        </form>`);
    });
});

router.post('/', (req, res, next) => {
    fs.writeFile('message.txt', `${req.body.username} : ${req.body.msg}`, {flag: 'a'}, (err) => {
        err ? console.log(err) : res.redirect('/');
    });
});


module.exports = router;