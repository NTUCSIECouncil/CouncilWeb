describe('Server 500 error testing', function () {
    const serverpath = '../../server';

    var server;
    beforeEach(function () {
        delete require.cache[require.resolve(serverpath)];
        server = require(serverpath);
    });
    it('Not listen syscall', function (done) {
        let error = {
            syscall: 'Other'
        };
        server.emit('error', error);
        done();
    });
    it('EACCES error code', function (done) {
        let error = {
            syscall: 'listen',
            code: 'EACCES'
        };
        server.emit('error', error);
        done();
    });
    it('EADDRINUSE error code', function (done) {
        let error = {
            syscall: 'listen',
            code: 'EADDRINUSE'
        };
        server.emit('error', error);
        done();
    });
    it('OTHER error code', function (done) {
        let error = {
            syscall: 'listen',
            code: 'OTHER'
        };
        server.emit('error', error);
        done();
    });
});