var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('events get');
});
router.post('/', function(req, res){
   res.send('events post');
});
router.get('/:id', function(req, res){
   res.send('events get' + req.params.id);
});
router.post('/:id', function(req, res){
   res.send('events post' + req.params.id);
});

module.exports = router;
