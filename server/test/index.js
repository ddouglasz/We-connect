import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';

const {
  expect,
} = chai;

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
      .send({
        random: 'random',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
describe('GET Reviews', () => {
  it('Should return 200 for getting reviews', (done) => {
    chai.request(app)
      .get('/api/v1/business/1/reviews')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
// Test for getting reviews
describe('GET Reviews', () => {
  it('Should return 404 for reviews that does not exist', (done) => {
    chai.request(app)
      .get('/api/v1/business/34/reviews')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});

// Test searching for  all business
describe('API to get all business', () => {
  it('Should return 200 if successful', (done) => {
    chai.request(app)
      .get('/api/v1/businesses')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

// Test searching for getting an individual business
describe('API to search a business', () => {
  it('Should return 200 if successful', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('Should return 404 if business is not found', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/13')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

// Test for Sorting user search
describe('GET Reviews', () => {
  it('Should return 200 for a successful searching by location', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=lagos')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('Should return 200 for a successful searching by category', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=ict')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});

