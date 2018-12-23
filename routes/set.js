var index = require('./index');
var admin = require('./admin');

module.exports = app => {
    app.use('/', index);
    app.use('/admin', admin);
    
    return app;
};
