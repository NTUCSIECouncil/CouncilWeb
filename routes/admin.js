var express = require('express');
var router = express.Router();

router
    .get('/',function(req,res){
	res.send('admin get');
    })
    .post('/',function(req,res){
	res.send('admin post');
    })

    .get('/events', function(req, res){
	res.send('events get');
    })
    .post('/events', function(req, res){
	res.send('events post');
    })

    .get('/events/:id', function(req, res){
	res.send('events get' + req.params.id);
    })
    .post('/events/:id', function(req, res){
	res.send('events post' + req.params.id);
    })

    .get('/projects', function(req, res){
	res.render('projects', { title: 'Add Project'});
    })
    .post('/projects', function(req, res){
	//res.send('projects post');

	var db = req.con;

	db.query('SELECT * FROM Projects', function(err, rows) {
            if (err) console.log(err);
            var data = rows;
	    var id = data[data.length-1].ProjectID + 1;

	    var sql = {
		ProjectID: id,
		Labname: req.body.labname,
		Description: req.body.description
	    };
	    var qur = db.query('INSERT INTO Projects SET ?', sql, function(err, rows) {
		if (err) console.log(err);
		res.setHeader('Content-Type', 'application/json');
		res.redirect('/');
	    });
	});
	
    })

    .get('/projects/:id', function(req, res){
	res.send('projects get' + req.params.id);
    })
    .post('/projects/:id', function(req, res){
	res.send('projects post' + req.params.id);
    })

    .get('/albums', function(req, res){ 
	res.send('albums get');
    })
    .post('/albums', function(req, res){
	res.send('albums post');
    });


module.exports = router;
