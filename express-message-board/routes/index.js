const express = require('express');
 const router = express.Router();
 const messages = require('./data');
 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board',messages:messages });
});

router.post('/new', (req, res) => {
  const messageText = req.body.reply;
  const messageUser = req.body.author;

  messages.push({ text: messageText, user: messageUser, added: new Date() });
  console.log('message posted')
  res.redirect('/');
});

module.exports = router;
