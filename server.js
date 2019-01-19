#!/usr/bin/env node
var config = require('./config.json');

var path = require('path');
var http = require('http');

var debug           = require('debug')('express-vue:server');
var cookieParser    = require('cookie-parser');
var helmet          = require('helmet');

var express = require('express');
var app = express();

// DataBase
var mysql = require("mysql");
var password = require('./password.json');
var con = mysql.createConnection(password);

con.connect(function(err) {
    if (err) {
	console.log('connecting error');
	return;
    }
    console.log('connecting success');
});

// view engine setup
app.set('views', path.join(__dirname, 'views/ejs'));
app.set('view engine', 'ejs');

/* istanbul ignore if */
if ( process.env.NODE_ENV === 'development' ) {
    app.use( require('morgan')('dev') );
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

app.use('/static', express.static(path.join(__dirname, 'public')));

// db state
//app.set('con', con);
app.use(function(req, res, next) {
    req.con = con;
    //console.log('req.con');
    next();    
});

/**
 * Set webpack and routes.
 */
app = require('./webpack/set')(app);
app = require('./routes/set')(app);

// catch and forward to root
/*
app.use(function(req, res) {
    res.redirect('/');
});
*/

/**
 * Get port from environment and store in Express.
 */

var port = config.port;
app.set('port', port);
console.log('localhost:'+port);

/**
 * Create HTTP server and,
 * Listen on provided port, on all network interfaces.
 */

var server = http.createServer(app);

server.listen(port);
server.on('error',      onError    );
server.on('listening',  onListening);

// For unit test server
module.exports = server;

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error) {
    if (error.syscall === 'listen') {
        var bind = 'Port ' + port;
    
        // handle specific listen errors with friendly messages
        switch (error.code) {
        case 'EACCES':
            debug(bind + ' requires elevated privileges');
            break;
        case 'EADDRINUSE':
            debug(bind + ' is already in use');
            break;
        }
    }
    server.close();
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = 'port ' + addr.port;
    debug('Listening on ' + bind);
}

