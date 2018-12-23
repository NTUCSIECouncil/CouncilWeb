var express = require('express');
var app = express();
var router = express.Router();

//render: ../../views/ejs
router.get('/', function(req, res, next) {
    var db = req.con;
    db.query('SELECT * FROM Projects', function(err, rows) {
        if (err) {
            console.log(err);
        }
        var data = rows;
        // use index.ejs
        res.render('index', { title: 'Projects Test', data: data});
    });
});

module.exports = router;
