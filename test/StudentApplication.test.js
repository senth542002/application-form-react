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

  describe('#GET /api/applications', function(){
    it('should get All the Student Applications!',function(done){
      request(app).get('/api/applications')
      .end(function(err, res){
        expect(res.status).to.equal(200);
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

     describe('#Get /api/applications/:applicationNumber', () => {
        it('should respond with the 400 for the incorrect application number', () => {
            request(app).get('/api/applications/'+101)
              .expect('Content-Type', /json/)
              .end(function(err,res) {
              console.log('Get Response Status: '+res.status)
                expect(res.status).to.equal(400);
                expect(res.body.message).to.be.equal('Application Number Not available');
              });
        });

        it('should respond with the 200 for the correct application number', () => {
            request(app).get('/api/applications/'+id)
              .expect('Content-Type', /json/)
              .end(function(err,res) {
              console.log('Get Response: '+res)
                expect(res.status).to.equal(200);
                console.log('Response Body '+res.body.data[0].id)
                expect(res.body.data[0].id).to.be.equal(id);
              });
        });
     });

    describe('#GET /api/applicationsByMobileNumber/:mobileNumber', () => {
        it('should get All the Student Applications Based on Mobile number!',() => {
        request(app).get('/api/applicationsByMobileNumber/'+"Mobile Number")
        .end(function(err, res){
            expect(res.status).to.equal(200);
            console.log('Response Body '+res.body.data[0].mobileNumber)
            expect(res.body.data[0].mobileNumber).to.be.equal("Mobile Number");
            });
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
