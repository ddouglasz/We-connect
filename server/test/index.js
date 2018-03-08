import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test API', () => {
  // Test for default route
  it('Should return 200 for the default route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  // Test for getting undefind rouotes
  it('Should return 404 for routes not specified', (done) => {
    chai.request(app)
      .get('/blah/blah/businesses')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
  // Test for posting to undefind rouotes
  it('Undefined Routes Should Return 404', (done) => {
    chai.request(app)
      .post('/another/blahblah/business')
      .send({ random: 'random' })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

// Test for posting a business
describe('POST business', () => {
  it('Should return 200 for a sucessful post', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 5,
        name: 'Andela Nigeria',
        image: 'steve.jpg',
        description: 'great company with acute vision and a focus for distributed yada yada yada blah blah blah🤡',
        category: 'ICT',
        location: 'Lagos',
        email: 'steve@steve.com'
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

// Test for posting a business with any field missing
describe('POST business', () => {
  it('Should return 400 for posting a business with any missing field', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 4,
        name: ' ',
        image: 'irokotv.jpg',
        description: 'great company with acute vision and a focus for distributed yada yada yada blah blah blah🤡',
        category: 'ICT',
        location: 'Lagos',
        email: 'iroko@irokotv.com'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
// Test for updating a business
describe('UPDATE/PUT business', () => {
  it('Should return 200 if successful', (done) => {
    chai.request(app)
      .put('/api/v1/business/1')
      .send({
        id: 2,
        name: 'irokotv',
        image: 'iroko.jpg',
        description: 'great company with acute vision and a focus for distributed yada yada yada blah blah blah🤡',
        category: 'ICT',
        location: 'Lagos',
        email: 'iroko@irokotv.com'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});


 