import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';
import models from './../models';

import { businessesDb } from '../seedData/business';
import { reviewsDb } from '../seedData/review';
import { usersDb } from '../seedData/user';

const {
  expect,
  assert,
  should
} = chai;
const businessModel = models.businesses;

let auth1;
let auth2;
let businessId1;
let businessId2;
should();

chai.use(chaiHttp);

describe('POST business:When user sends a POST request to /api/v1/businesses/:businessId/reviews', () => {
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
  before((done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .set('auth', auth1)
      .type('form')
      .send({
        title: 'farmcrowdy',
        image: 'farm.jpg',
        description: 'a software development company.',
        category: 'ICT',
        location: 'lagos',
        email: 'andela@andela.com',
      })
      .end((err, res) => {
        businessId1 = res.body.business.id;
        done();
      });
  });

  it('should return a status 404 error and a response message for business that does not exist and wants to be reviewed', (done) => {
    chai.request(app)
      .post(`/api/v1/businesses/${businessId1}/reviews`)
      .set('auth', auth1)
      .type('form')
      .send({
        title: 'pascal',
        review: 'truly built on excellence'
      })
      .end((err, res) => {
        res.should.have.status(404);
        assert.equal(
          res.body.message,
          'business not found'
        );
        done();
      });
  });
});
