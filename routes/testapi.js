var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'TestAPI Demo' ,api:'/'});
});

/* Optional */
router.get('/user/:id?', function(req, res, next) {
  console.log(req.params);
  res.render('test', { title: 'TestAPI Demo', api:'/user/'+req.params.id });
});

/* 
ab?cd --> acd and abcd.
ab+cd --> abcd, abbcd, abbbcd
ab*cd --> abcd, abxcd, abRANDOMcd, ab123cd
ab(cd)?e --> abe and abcde
*/
router.get('/name/ab?cd', function(req, res, next) {
  console.log(req.params);
  res.render('test', { title: 'TestAPI Demo', api:"/name/ab?cd invoked" });
});

router.get('/*fly/', function(req, res, next) {
  console.log(req.params);
  res.render('test', { title: 'TestAPI Demo',api: "/fly/.*fly$/"});
});

module.exports = router;
