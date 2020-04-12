var express = require('express');
var router = express.Router();

//router.use('/static', express.static('public'));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.render('userdetail', { title: 'UserDetail', username: req.body.username, password:req.body.password });
});

module.exports = router;
