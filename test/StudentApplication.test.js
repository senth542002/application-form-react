'use strict'

var app = require('../app'),
    chai = require('chai'),
    request = require('supertest'),
    nock = require('nock');

var expect = chai.expect;

describe('Student Application API Integration Tests', function(){

  describe('#GET /', function(){
    it('should get Welcome to the Application Service',function(done){
      request(app).get('/')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.body.message).to.be.equal('Welcome to the Application Service');
        done();
      });
    });
  });

  describe('#GET /api/', function(){
    it('should get Welcome to the Student Application!',function(done){
      request(app).get('/api/')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.body.message).to.be.equal('Welcome to the Student Application!');
        done();
      });
    });
  });

  describe('#POST /api/applications', function(){
    let data = {
       "name": "name",
       "fatherName": "Father Name",
       "motherName": "Mother Name",
       "email": "Email Id",
       "mobileNumber": "Mobile Number",
       "dateOfBirth": "2019-07-14T13:34:00.000"
    }

    var id = '';
     it('respond with 201 created', function(done){
       request(app).post('/api/applications')
         .send(data)
         .expect('Content-Type', /json/)
         .end(function(err, res){
           expect(res.status).to.equal(201);
           expect(res.body.name).to.be.equal('name');
           id = res.body.id;
           done();
         });
     });

     describe('#DELETE /api/applications/:applicationId', function(){
       it('respond with 200 Deleted', function(done){
         request(app).delete('/api/applications/'+id)
           .expect('Content-Type', /json/)
           .end(function(err, res){
             expect(res.status).to.equal(200);
             expect(res.body.message).to.be.equal('Application Form deleted successfully.');
             done();
           });
       });
     });

  });

});
