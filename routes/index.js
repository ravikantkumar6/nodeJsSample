var express = require('express');
var router = express.Router();
//router.use(express.static('public'));
router.use('/static', express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
