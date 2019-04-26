var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__basedir, '/public/img'))
    },
    filename: function (req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
});
var upload = multer({storage: storage});

router
    .use('/', function(req, res, next){
	//original path: req._parsedOriginalUrl.pathname
	if (req.session.loggedin) {
	    next();
        //res.redirect('/admin/index');
	} else {
	    res.redirect('/login');
	}
    })

    .get('/index', function(reg, res){
    res.render('admin/index', {title: 'Admin home'});
    })

    .get('/events/add', function(req, res){
	res.render('admin/add/events', { title: 'Add Events'});
    })
    .post('/events/add', function(req, res){
	var db = req.con;
	db.query('SELECT * FROM Events', function(err, data) {
            if (err) console.log(err);
	    var id = 1;
	    var date = new Date().toISOString().slice(0, 19).replace('T', ' ');;
	    if (data.length != 0) id = data[data.length-1].EventID + 1;
	    var sql = {
		EventID: id,
		EventName: req.body.EventName,
		CreateDate: date,
		Content: req.body.Content
	    };
	    db.query('INSERT INTO Events SET ?', sql, function(err, rows) {
		if (err) console.log(err);
		res.setHeader('Content-Type', 'application/json');
		res.redirect('/events');
	    });
	});
    })

    .get('/events/:id', function(req, res){
	res.send('events get' + req.params.id);
    })
    .post('/events/:id', function(req, res){
	res.send('events post' + req.params.id);
    })

    .get('/projects', function(req, res){
	var db = req.con;
	db.query('SELECT * FROM Projects', function(err, data) {
            if (err) console.log(err);
	    res.render('admin/projects', { title: 'Admin Project', Projects: data});
	});
    })
    .post('/projects/delete', function(req, res){
	var db = req.con;
	var del = req.body.del;
	db.query("DELETE FROM Projects WHERE ProjectID = ?", del, function(err) {
	    if (err) console.log(err);
	});
	res.redirect('/admin/projects');
    })
    .get('/projects/add', function(req, res){
	res.render('admin/add/projects', { title: 'Add Project'});
    })
    .post('/projects/add', function(req, res){
	var db = req.con;
	db.query('SELECT * FROM Projects', function(err, data) {
            if (err) console.log(err);
	    var id = 1;
	    if (data.length != 0) id = data[data.length-1].ProjectID + 1;
	    var sql = {
		ProjectID: id,
		LabName: req.body.LabName,
		Description: req.body.Description
	    };
	    db.query('INSERT INTO Projects SET ?', sql, function(err, rows) {
		if (err) console.log(err);
		res.setHeader('Content-Type', 'application/json');
		res.redirect('/projects');
	    });
	});
    })

    .get('/projects/:id', function(req, res){
	var db = req.con;
	db.query("SELECT * FROM Projects WHERE ProjectID = ?", req.params.id, function(err, data) {
            if (err) console.log(err);
	    res.render('admin/modify/projects', { title: 'Modify Project', Projects: data[0] });
	});
    })
    .post('/projects/modify', function(req, res){
	var db = req.con;
	var sql = {
	    ProjectID: req.body.ProjectID,
	    LabName: req.body.LabName,
	    Description: req.body.Description
	};
	db.query('UPDATE Projects SET ? WHERE ProjectID = ?', [sql, sql.ProjectID], function(err, rows) {
	    if (err) {console.log(err); return;}
	    res.setHeader('Content-Type', 'application/json');
	    res.redirect('/admin/projects');
	});
    })

    .get('/albums/add', function(req, res){ 
	res.render('admin/add/albums', { title: 'Add Albums'});
    })
    .post('/albums/add', upload.single("CoverImg"), function(req, res){
	var db = req.con;
	db.query('SELECT * FROM Albums', function(err, data) {
            if (err) console.log(err);
	    var id = 1;
	    if (data.length != 0) id = data[data.length-1].AlbumID + 1;
	    var sql = {
		AlbumID: id,
		AlbumName: req.body.AlbumName,
		URL: req.body.URL,
		CoverImg: req.file.filename
	    };
	    db.query('INSERT INTO Albums SET ?', sql, function(err, rows) {
		if (err) console.log(err);
		res.setHeader('Content-Type', 'application/json');
		res.redirect('/albums');
	    });
	});
    });

module.exports = router;
