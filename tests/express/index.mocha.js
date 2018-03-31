const expect = require('chai').expect;
var request = require('supertest');
const serverpath = '../../server';

describe('index page:', function () {
    describe('GET /', function () {
        var server;
        beforeEach(function () {
            delete require.cache[require.resolve(serverpath)];
            server = require(serverpath);
        });
        afterEach(function (done) {
            server.close(done);
        });
        it('Response', function (done) {
            request(server)
                .get('/')
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect(200)
                .end(function(err, res){
                    if (err) throw err;
                    expect(res.text).to.be.exist;
                    done();
                });
        });
    });
    
    describe('GET /404', function () {
        var server;
        beforeEach(function () {
            delete require.cache[require.resolve(serverpath)];
            server = require(serverpath);
        });
        afterEach(function (done) {
            server.close(done);
        });
        it('Response', function (done) {
            request(server)
                .get('/404Page/')
                .expect(302)
                .expect('Location', '/')
                .end(function(err){
                    if (err) throw err;
                    done();
                });
        });
    });
});

