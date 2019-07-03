var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

//render: ../../views/ejs
router
    .get('/', function(req, res) {
    	var db = req.con;
    	var title = 'NTU CSIE WEB';
    	var projects, events;
    	db.query('SELECT COUNT(1) AS count FROM Projects; SELECT COUNT(1) AS count FROM Events;', function(err, data) {
            if (err) { console.log(err); return; }
            console.log(data[1][0]);
    	    res.render('index', { 
                title: title,
                Projects_TotalPage: data[0], Events_TotalPage: data[1]
            });
    	});
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
        		    res.redirect('/admin/index');
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

    .get('/albums', function(req, res, next) {
    	var db = req.con;
    	var title = 'Albums Test';
    	db.query('SELECT * FROM Albums', function(err, albums) {
                if (err) {console.log(err); return; }
    	    res.render('albums', { title: title, Albums: albums});
    	});
    })

    .get('/event_content/:id', function(req, res){
    	var db = req.con;
    	db.query("SELECT * FROM Events WHERE EventID = ?", req.params.id, function(err, data) {
                if (err) console.log(err);
    	    res.render('event_content', { title: 'More about Event', Events: data[0] });
    	});
    })

    .get('/project_content/:id', function(req, res){
    	var db = req.con;
    	db.query("SELECT * FROM Projects WHERE ProjectID = ?", req.params.id, function(err, data) {
                if (err) console.log(err);
    	    res.render('project_content', { title: 'More about Project', Projects: data[0] });
    	});
    })

    .post('/events_ajax', function(req, res, next) {
        var skip = req.body.pageNum;
        var num = parseInt(skip)*10;
        
        var db = req.con;
        var objson = [];
        db.query("SELECT EventID, EventName, Category, CreateDate FROM Events ORDER BY EventID DESC LIMIT ?, 10", [num], function (err, result, fields) {
            if (err) throw err;

            for (var i = 0 ; i < result.length;i++) {
                objson.push({
                    EventID:result[i].EventID,
                    EventName:result[i].EventName, 
                    Category:result[i].Category, 
                    CreateDate:String(result[i].CreateDate).substring(4,15)});
            }
            res.send(JSON.stringify(objson));
        });
    })

    .post('/projects_ajax', function(req, res, next) {
        var skip = req.body.pageNum;
        var num = parseInt(skip)*10;
        
        var db = req.con;
        var objson = [];
        db.query("SELECT ProjectID, LabName, Description FROM Projects ORDER BY ProjectID DESC LIMIT ?, 10", [num], function (err, result, fields) {
            if (err) throw err;
            for (var i = 0 ; i < result.length;i++) {
                objson.push({
                    ProjectID:result[i].ProjectID, 
                    LabName:result[i].LabName, 
                    Description:result[i].Description});
            }
            res.send(JSON.stringify(objson));
        });
    })


module.exports = router;
