
const request = require('supertest');

const expect =require('expect');

var app = require('./server').app;

describe('serverFile', () => {


describe('GET/', () => {
    it('should return a value',(done) => {
request(app)
.get('/')
.expect(200)
.expect('hello world')
.end(done);
});

});


describe('GET/user', () => {
    it('should return my user object', (done) => {

  request(app)
  .get('/user')
  .expect(200)
  .expect((res) => {
   expect(res.body).toInclude({
        name: 'anmol',
        age: 25
    });
  })
.end(done);

});

});
});
