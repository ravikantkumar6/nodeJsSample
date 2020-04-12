var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();

//router.use('/static', express.static('public'));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',
[check('username','username should be email').isEmail(),
check('password','password should be 5 length').isLength({min : 5})], 
function(req, res, next) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errors.array()[0].title = "Error!!!";
    return res.render('error',errors.array()[0]);
  }
  res.render('userdetail', { title: 'UserDetail', username: req.body.username, password:req.body.password });
});

module.exports = router;
