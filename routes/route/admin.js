var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('admin get');
});
router.post('/',function(req,res){
	res.send('admin post');
});
router.get('/news', function(req, res){
   res.send('news get');
});
router.post('/news', function(req, res){
   res.send('news post');
});
router.get('/news/:id', function(req, res){
   res.send('news get' + req.params.id);
});
router.post('/news/:id', function(req, res){
   res.send('news post' + req.params.id);
});

router.get('/photo', function(req, res){ 
   res.send('photo get');
});
router.post('/photo', function(req, res){
   res.send('photo post');
});

router.get('/my_locker', function(req, res){
   res.send('locker get');
});
router.post('/my_locker', function(req, res){
   res.send('locker post');    
});
router.get('/my_locker/:id', function(req, res){
   res.send('my_locker get' + req.params.id);
});
router.post('/my_locker/:id', function(req, res){
   res.send('my_locker post' + req.params.id);
});

module.exports = router;



