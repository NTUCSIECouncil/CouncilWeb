var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('admin get');
});

module.exports = router;