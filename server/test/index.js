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

// Test for posting a business
describe('POST business', () => {
  it('Should return 200 for a sucessful post', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 5,
        title: 'Andela Nigeria',
        image: 'steve.jpg',
        description: 'great company with acute vision and a focus for distributed yada yada yada blah blah blah🤡',
        category: 'ICT',
        location: 'Lagos',
        email: 'steve@steve.com',
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
        title: ' ',
        image: 'irokotv.jpg',
        description: 'great company with acute vision and a focus for distributed yada yada yada blah blah blah🤡',
        category: 'ICT',
        location: 'Lagos',
        email: 'iroko@irokotv.com',
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
        title: 'irokotv',
        image: 'iroko.jpg',
        description: 'great company with acute vision and a focus for distributed yada yada yada blah blah blah🤡',
        category: 'ICT',
        location: 'Lagos',
        email: 'iroko@irokotv.com',
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});


// Test to delete a business Profile
describe('API delete Profile', () => {
  it('Should return 200 for succesful delete request ', (done) => {
    chai.request(app)
      .delete('/api/v1/businesses/3')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('Should return 404 if parameter is not found', (done) => {
    chai.request(app)
      .delete('/api/v1/businesses/50')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

// Test for posting reviews
describe('Test for POST review', () => {
  it('Should return 201 if successful', (done) => {
    chai.request(app)
      .post('/api/v1/business/2/reviews')
      .send({
        id: '5',
        reviewedBy: 'steve',
        review: 'yap yop yup yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas!',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('Should return 400 if any parameters is empty', (done) => {
    chai.request(app)
      .post('/api/v1/business/:businessId/reviews')
      .send({
        id: '2',
        reviewedBy: 'steve',
        review: '',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
// Test for getting reviews
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

// Test Signing up a user
describe('Create new user', () => {
  it('Should return 400 for missing fields', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        userId: '1',
        usertitle: '',
        fulltitle: 'stevesteve',
        email: 'steve@steve.com',
        password: 'password',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('Should return 200 for success', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        userId: 1,
        fulltitle: 'longe bee',
        usertitle: 'long',
        password: 'longerman',
        email: 'longer@man.com'
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

// Test Signing in a user
describe('Login user', () => {
  it('Should return 401 for wrong inputs', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        usertitle: 'steve',
        password: 'longman',
      })
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it('Should return 200 for success in logging in', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        usertitle: 'longe',
        password: 'longman',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
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

