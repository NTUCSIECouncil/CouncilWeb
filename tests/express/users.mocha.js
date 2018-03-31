const expect = require('chai').expect;
var request = require('supertest');

var server;
var serverpath = '../../server';

describe('users API', function () {
    describe('GET /users/', function () {
        beforeEach(function () {
            delete require.cache[require.resolve(serverpath)];
            server = require(serverpath);
        });
        afterEach(function (done) {
            server.close(done);
        });
        it('users have not id response', function (done) {
            request(server)
                .get('/users')
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect(200)
                .end(function(err, res){
                    if (err) throw err;
                    expect(res.text).to.be.exist;
                    done();
                });
        });
    });
    
    describe('GET /users/404', function () {
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
                .get('/users/404Page/')
                .expect(200)
                .end(function(err){
                    if (err) throw err;
                    done();
                });
        });
    });
});
