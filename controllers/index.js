var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/pokemon', require('./pokemon.js'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

module.exports = router;