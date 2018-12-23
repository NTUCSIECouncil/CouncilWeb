var express = require('express');
var router = express.Router();

router.get('/', function(req, res){ 
   res.send('albums get');
});
router.post('/', function(req, res){
   res.send('albums post');
});

module.exports = router;
