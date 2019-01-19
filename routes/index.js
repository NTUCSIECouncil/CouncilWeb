var express = require('express');
var app = express();
var router = express.Router();

//render: ../../views/ejs
router
    .get('/', function(req, res, next) {
	var db = req.con;
	var title = 'Projects Test';
	db.query('SELECT * FROM Projects', function(err, projects) {
            if (err) {console.log(err); return; }
	    res.render('index', { title: title, data: projects});
	});
    })
    .get('/projects', function(req, res, next) {
	var db = req.con;
	var title = 'Projects Test';
	db.query('SELECT * FROM Projects', function(err, projects) {
            if (err) {console.log(err); return; }
	    res.render('projects', { title: title, Projects: projects});
	});
    })
    .get('/events', function(req, res, next) {
	var db = req.con;
	var title = 'Events Test';
	db.query('SELECT * FROM Events', function(err, events) {
            if (err) {console.log(err); return; }
	    res.render('events', { title: title, Events: events});
	});
    })
    .get('/albums', function(req, res, next) {
	var db = req.con;
	var title = 'Albums Test';
	db.query('SELECT * FROM Albums', function(err, albums) {
            if (err) {console.log(err); return; }
	    res.render('albums', { title: title, Albums: albums});
	});
    });


module.exports = router;
