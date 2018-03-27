import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';
// import db from './../models';

// const { User } = db;
const { expect, assert, should } = chai;
should();

chai.use(chaiHttp);

describe('TEST for user routes', () => {
  describe('When user sends a POST request to /api/v1/auth/signup', () => {
    it('should return a status 201 and a response message', () => {
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
        });
    });

    // it('should return a status 201 and a response message', () => {
    //   chai.request(app)
    //     .post('/api/v1/auth/signup')
    //     .send({
    //       firstName: 'steve',
    //       lastName: 'dougs',
    //       email: 'steve@dougs.com',
    //       password: 'password'
    //     })
    //     .end((err, res) => {
    //       res.should.have.status(201);
    //       expect(res.body).to.be.a('object');
    //       assert.equal(
    //         res.body.message,
    //         'Registration Successful'
    //       );
    //     });
    // });
  });
});
