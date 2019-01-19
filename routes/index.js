var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

//render: ../../views/ejs
router
    .get('/', function(req, res) {
	var db = req.con;
	var title = 'Projects Test';
	db.query('SELECT * FROM Projects', function(err, projects) {
            if (err) {console.log(err); return; }
	    res.render('index', { title: title, data: projects});
	})
    })
    .get('/login', function(req, res) {
	res.render('login');
    })
    .post('/auth', function(req, res) {
	var db = req.con;
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
	    db.query('SELECT * FROM Accounts WHERE username = ? AND password = ?',
			     [username, password], function(err, results, fields) {
		if (results.length > 0) {
		    req.session.loggedin = true;
		    req.session.username = username;
		    res.redirect('/admin/projects');
		} else {
		    res.send('Incorrect Username and/or Password!');
		}			
		res.end();
	    });
	} else {
	    res.send('Please enter Username and Password!');
	    res.end();
	}
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
