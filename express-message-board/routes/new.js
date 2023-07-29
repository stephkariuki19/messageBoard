const express = require('express');
const router = express.Router();
const messages = require('./data');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('form', { heading: 'Write a message!'});

    // testing ->res.send('new page');
});



module.exports = router;
