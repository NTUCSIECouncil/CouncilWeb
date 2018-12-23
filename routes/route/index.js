var express = require('express');
var app = express();
var admin = require('./admin.js');
app.get('/', function(req, res){
    res.send('index get'); 
});
app.use('/admin', admin);

app.listen(3000);
