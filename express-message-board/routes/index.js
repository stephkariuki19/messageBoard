var express = require('express');
 const router = express.Router();
 const messages = require('./data');
 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board',messages:messages });
});

module.exports = router;
