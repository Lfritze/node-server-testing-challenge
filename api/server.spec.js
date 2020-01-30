const request = require('supertest');

const server = require('./server.js');

it('should set db ENV to testing', function() {
    expect(process.env.DB_ENV)
    .toBe('testing')
})

describe('server', function() {
    describe('GET /', function() {
        it('should return 200 OK', function() {
        return request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200);
            });
        });

  })
})

describe('server', function() {
    describe('GET /players', function() {
        it('should return 200 OK', function() {
        return request(server)
        .get('/players')
        .then(res => {
            expect(res.status).toBe(200);
            });
        });

        it('should return an array of players', function() {
            return request(server)
            .get('/players')
            .then(res => {
                expect(res.type).toMatch(/json/);
                });
            });

  })
})

describe('server', function() {
    describe('DELETE /:id', function() {
        it('should delete player', function() {
        return request(server)
        .delete('/:id')
        .then(res => {
            expect(res.status).toBe(200);
            });
        });

  })
})