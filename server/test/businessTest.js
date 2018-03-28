import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';
import models from './../models';

import { businessesDb } from '../seedData/business';
import { reviewsDb } from '../seedData/review';
import { usersDb } from '../seedData/user';

const { expect, assert, should } = chai;
const businessModel = models.businesses;

let auth1;
let auth2;
let businessId1;
let businessId2;
should();

chai.use(chaiHttp);


describe('TEST for businesses', () => {
  before((done) => {
    businessModel.sync({ force: true })
      .then(() => done());
  });

  describe('POST business:When user sends a POST request to /api/v1/businesses/', () => {
    before((done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .type('form')
        .send({
          email: 'steve@dougs.com',
          password: 'password'
        })
        .end((err, res) => {
          auth1 = res.body.token;
          done();
        });
    });
    it('should return a status 201 and a response message for a new business', (done) => {
      chai.request(app)
        .post('/api/v1/businesses')
        .set('auth', auth1)
        .type('form')
        .send({
          title: 'andela',
          image: 'andela.jpg',
          description: 'a software development company changing the face of africa',
          category: 'ICT',
          location: 'lagos',
          email: 'andela@andela.com',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.business.should.be.a('object');
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'Business added successfully.'
          );
          businessId1 = res.body.business.id;
          done();
        });
    });

    it('should return a status 400 for any undefined field', (done) => {
      chai.request(app)
        .post('/api/v1/businesses')
        .set('auth', auth1)
        .type('form')
        .send({
          image: 'andela.jpg',
          description: 'a software development company changing the face of africa',
          category: 'ICT',
          location: 'lagos',
          email: 'andela@andela.com',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'All or some of the field is/are undefined'
          );
          done();
        });
    });

    it('should return a status 401 and a response message for an empty field', (done) => {
      chai.request(app)
        .post('/api/v1/businesses')
        .set('auth', auth1)
        .type('form')
        .send({
          title: 'andela',
          image: 'andela.jpg',
          description: 'a software development company changing the face of africa',
          category: 'ICT',
          location: 'lagos',
          email: ' ',
        })
        .end((err, res) => {
          console.log(res);
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'email is required'
          );
          done();
        });
    });

    it('should return a status 406 and a response message for a business title out of 3 to 30 characters', (done) => {
      chai.request(app)
        .post('/api/v1/businesses')
        .set('auth', auth1)
        .type('form')
        .send({
          title: 'a',
          image: 'andela.jpg',
          description: 'a software development company changing the face of africa',
          category: 'ICT',
          location: 'lagos',
          email: 'andela@andela.com',
        })
        .end((err, res) => {
          res.should.have.status(406);
          res.body.should.be.a('object');
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'Business title should be 3 to 30 characters'
          );
          done();
        });
    });
  });
});
