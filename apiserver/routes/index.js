var express = require('express');
var router = express.Router();
var create = require('.././createEntry');
var retrieve = require('.././retrieveEntry');

/* GET home page. */
router.get('/', function(req, res, next) {
  create("Donald Trump", null);
  retrieve("Donald Trump", null);
  res.render('index', { title: 'Express' });

});

module.exports = router;
