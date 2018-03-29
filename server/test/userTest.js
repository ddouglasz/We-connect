import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';
import models from './../models';

const usersModel = models.users;
const { expect, assert, should } = chai;
should();

chai.use(chaiHttp);

describe('TEST for user routes', () => {
  before((done) => {
    usersModel
      .sync({ force: true })
      .then(() => done());
  });
  describe('When user sends a POST request to /api/v1/auth/signup', () => {
    it('should return a status 201 and a response message', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstName: 'steve',
          lastName: 'dougs',
          email: 'steve@dougs.com',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(201);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'Registration Successful'
          );
          done();
        });
    });

    it('should return a status 401 if required field is empty', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstName: 'steve',
          lastName: 'dougs',
          email: '',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(401);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'All or some of the field is/are undefined'
          );
          done();
        });
    });

    it('should return a status 409 if duplicate mails exists', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstName: 'steve',
          lastName: 'dougs',
          email: 'steve@dougs.com',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(409);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'Email Already Exists'
          );
          done();
        });
    });

    it('should return a status 401 if firstname is carrying a number', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstName: 'steve1',
          lastName: 'dougs',
          email: 'steve@dougs.com',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(401);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'Only alphabets allowed in first name'
          );
          done();
        });
    });

    it('should return a status 401 if lastname is carrying a number', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstName: 'steve',
          lastName: '466e64634',
          email: 'steve@dougs.com',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(401);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'Only alphabets allowed in last name'
          );
          done();
        });
    });
  });

  describe('When user sends a POST request to /api/v1/auth/login', () => {
    it('should return a status 200 and a response message', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'steve@dougs.com',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'signed in successfully'
          );
          assert.isString(
            res.body.token,
            'jwt should be a string'
          );
          done();
        });
    });

    it('should return a status 401 if required field is empty', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: '',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(401);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'All or some of the field is/are undefined'
          );
          done();
        });
    });

    it('should return a status 404 if email is not in database', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'steve@thomas.com',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(404);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'User Not Found'
          );
          done();
        });
    });

    it('should return a status 404 if email is not in database', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'steve@thomas.com',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(404);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'User Not Found'
          );
          done();
        });
    });

    it('should return a status 404 if email is not in database', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'steve@thomas.com',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(404);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'User Not Found'
          );
          done();
        });
    });

    it('should return a status 401 for invalid email', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'stevejhdjksk',
          password: 'password'
        })
        .end((err, res) => {
          res.should.have.status(401);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'Email Invalid'
          );
          done();
        });
    });
  });
});
