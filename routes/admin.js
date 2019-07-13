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
	} else {
	    res.redirect('/login');
	}
    })

    .get('/index', function(reg, res){
    res.render('admin/index', {title: 'Admin home'});
    })
/////////////////////Events/////////////////////
    .get('/events', function(req, res){
	var db = req.con;
	db.query('SELECT * FROM Events', function(err, data) {
            if (err) console.log(err);
	    res.render('admin/events', { title: 'Admin Event', Events: data});
	});
    })

    .post('/events/delete', function(req, res){
	var db = req.con;
	var del = req.body.del;
	db.query("DELETE FROM Events WHERE EventID = ?", del, function(err) {
	    if (err) console.log(err);
	});
	res.redirect('/admin/events');
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
        Category: req.body.Category,
		EventName: req.body.EventName,
		CreateDate: date,
		Content: req.body.Content
	    };
	    db.query('INSERT INTO Events SET ?', sql, function(err, rows) {
		if (err) console.log(err);
		res.setHeader('Content-Type', 'application/json');
		res.redirect('/admin/events');
	    });
	});
    })

    .get('/events/:id', function(req, res){
	var db = req.con;
	db.query("SELECT * FROM Events WHERE EventID = ?", req.params.id, function(err, data) {
            if (err) console.log(err);
	    res.render('admin/modify/events', { title: 'Modify Event', Events: data[0] });
	});
    })

    .post('/events/modify', function(req, res){
	var db = req.con;
    var date = new Date().toISOString().slice(0, 19).replace('T', ' ');;
	var sql = {
	    EventID: req.body.EventID,
        Category: req.body.Category,
		EventName: req.body.EventName,
		CreateDate: date,
		Content: req.body.Content
	};
	db.query('UPDATE Events SET ? WHERE EventID = ?', [sql, sql.EventID], function(err, rows) {
	    if (err) {console.log(err); return;}
	    res.setHeader('Content-Type', 'application/json');
	    res.redirect('/admin/events');
	});
    })

/////////////////////Projects/////////////////////
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

    .post('/projects/add', function(req, res){
	var db = req.con;
	db.query('SELECT * FROM Projects', function(err, data) {
            if (err) console.log(err);
	    var id = 1;
	    if (data.length != 0) id = data[data.length-1].ProjectID + 1;
	    var sql = {
		ProjectID: id,
		ProfessorName_ZH: req.body.ProfessorName_ZH,
		ProfessorName_EN: req.body.ProfessorName_EN,
		LabName: req.body.LabName,
		Description: req.body.Description
	    };
	    db.query('INSERT INTO Projects SET ?', sql, function(err, rows) {
		if (err) console.log(err);
		res.setHeader('Content-Type', 'application/json');
		res.redirect('/admin/projects');
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
	    ProfessorName_ZH: req.body.ProfessorName_ZH,
		ProfessorName_EN: req.body.ProfessorName_EN,
	    LabName: req.body.LabName,
	    Description: req.body.Description
	};
	db.query('UPDATE Projects SET ? WHERE ProjectID = ?', [sql, sql.ProjectID], function(err, rows) {
	    if (err) {console.log(err); return;}
	    res.setHeader('Content-Type', 'application/json');
	    res.redirect('/admin/projects');
	});
    })
/////////////////////Albums/////////////////////
    .get('/albums', function(req, res){
	var db = req.con;
	db.query('SELECT * FROM Albums', function(err, data) {
            if (err) console.log(err);
	    res.render('admin/albums', { title: 'Admin Album', Albums: data});
	});
    })

    .post('/albums/delete', function(req, res){
	var db = req.con;
	var del = req.body.del;
	db.query("DELETE FROM Albums WHERE AlbumID = ?", del, function(err) {
	    if (err) console.log(err);
	});
	res.redirect('/admin/albums');
    })

    .get('/albums/add', function(req, res){ 
	res.render('admin/add/albums', { title: 'Add Albums'});
    })
    .post('/albums/add', upload.single("CoverImg"), function(req, res){
	var db = req.con;
	db.query('SELECT * FROM Albums', function(err, data) {
            if (err) console.log(err);
	    var id = 1;
        var date = new Date().toISOString().slice(0, 19).replace('T', ' ');;
	    if (data.length != 0) id = data[data.length-1].AlbumID + 1;
	    var sql = {
		AlbumID: id,
        Creator: req.body.Creator,
		AlbumName: req.body.AlbumName,
		URL: req.body.URL,
        CreateDate: date,
		//CoverImg: req.file.filename
	    };
	    db.query('INSERT INTO Albums SET ?', sql, function(err, rows) {
		if (err) console.log(err);
		res.setHeader('Content-Type', 'application/json');
		res.redirect('/admin/albums');
	    });
	});
    })

    .get('/albums/:id', function(req, res){
	var db = req.con;
	db.query("SELECT * FROM Albums WHERE AlbumID = ?", req.params.id, function(err, data) {
            if (err) console.log(err);
	    res.render('admin/modify/albums', { title: 'Modify Album', Albums: data[0] });
	});
    })

    .post('/albums/modify', function(req, res){
	var db = req.con;
    var date = new Date().toISOString().slice(0, 19).replace('T', ' ');;
	var sql = {
	    AlbumID: req.body.AlbumID,
        Creator: req.body.Creator,
		AlbumName: req.body.AlbumName,
		URL: req.body.URL,
        CreateDate: date,
		//CoverImg: req.file.filename
	};
	db.query('UPDATE Albums SET ? WHERE AlbumID = ?', [sql, sql.AlbumID], function(err, rows) {
	    if (err) {console.log(err); return;}
	    res.setHeader('Content-Type', 'application/json');
	    res.redirect('/admin/albums');
	});
    })

module.exports = router;
