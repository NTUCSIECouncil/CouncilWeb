var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('projects get');
});
router.post('/', function(req, res){
   res.send('projects post');
});
router.get('/:id', function(req, res){
   res.send('projects get' + req.params.id);
});
router.post('/:id', function(req, res){
   res.send('projects post' + req.params.id);
});

module.exports = router;
