import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

const { expect } = chai;
chai.use(chaiHttp);

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZmlyc3ROYW1lIjoic3RldmUiLCJsYXN0TmFtZSI6ImRvdWciLCJlbWFpbCI6Imlyb2tvdHZAaXJva28uY29tIiwiaWF0IjoxNTIyMTI0MDAzLCJleHAiOjE1MjIxMjc2MDN9.-stqvIdTY1wFzjw3OA5yqbXbmYZAQkBm8L7yrDnKAhQ';

const Business = {
  title: `Irokotv international ${Math.random() * 100}`,
  location: 'lagos',
  category: 'Entertainment',
  description: 'very very nice',
  email: 'iroko@iroko.com',
  image: 'iroko.jpg'
};

const User = {
  email: 'irokotv@iroko.com',
  password: 'password1111',
  firstName: 'steve',
  lastName: 'dougs'
};
// DEFAULT ROUTES

describe('Test API', () => {
  // Test for default route
  it(' Should return 200 for the default route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  //  test for getting undefind routes
  it(' Should return 404 for routes not specified', (done) => {
    chai.request(app)
      .get('/blah/blah/businesses')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
  // Test for posting to undefind rouotes
  it(' Undefined Routes Should Return 404', (done) => {
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

// Redirect to API v1
describe('GET /', () => {
  it('should get home', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
  });
});

//  GET /api/v1
describe('GET /api/v1', () => {
  it('should get home', () => {
    chai.request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
  });
});

//   Get 404 for a page not found
describe('GET page not found', () => {
  it('should return 200', (done) => {
    chai.request(app)
      .get('/api/v1/qwerty/uiop')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

// SIGN UP/ LOGIN TESTS
//  return 401 if no email is provided to signup
it('POST signup:returns 401 if no email', (done) => {
  chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      email: '',
      password: 'steve1111',
      firstName: 'steve',
      lastName: 'dougs'
    })
    .end((err, res) => {
      expect(res).to.have.status(401);
      chai.request(app)
        .post('/api/v1/auth/signup')
        .set('token', token)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          done();
        });
    });
});
//  return 401 if no password for signup
it('returns 401 if no password for signing up', (done) => {
  chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      email: 'irokotv@iroko.com',
      password: '',
      firstName: 'steve',
      lastName: 'dougs'
    })
    .end((err, res) => {
      expect(res).to.have.status(401);
      chai.request(app)
        .post('/api/v1/auth/signup')
        .set('token', token)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          done();
        });
    });
});
//  returns 409 for a user that already exists
it('should return 409 if user already exists', (done) => {
  chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      email: 'two@email.com',
      password: 'steve1111',
      firstName: 'steve',
      lastName: 'dougs'
    })
    .end((err, res) => {
      expect(res)
        .to.have.status(409);
      expect(res.body)
        .to.be.a('object');
      done();
    });
});

//  Post Login Should return 401 if no password
describe('(Bad Requests) POST auth/login/', () => {
  it('should return 401 if no password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'irokotv@iroko.com',
        password: '',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
  // return 401 for no email
  it('should return 401 if no email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: '',
        password: 'steve1111',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
  //  401 for wrong email/password
  it('should return 401 if email or password is wrong', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'steve@steve111.com',
        password: 'steve1111',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
        expect(res.body)
          .to.be.a('Invalid email and/or password');
        done();
      });
  });
});

//  Post Log in - Should Login Successfully
describe('POST auth/login/', () => {
  it('should authenticate successfully', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: User.email,
        password: User.password,
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
});

// POST BUSINESSSES

// Add a business
describe('POST businesses', () => {
  it('should return 400 if no business name', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .set('x-access-token', token)
      .send({
        title: '',
        details: 'Best of entertainment',
        location: 'lagos',
        category: 'Entertainment',
        email: 'iroko@iroko.com',
        image: 'iroko.jpg'
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
  //  for undefined business title
  it('should return 400 if name is undefined', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .set('x-access-token', token)
      .send({
        title: undefined,
        details: 'best best bessssst',
        location: 'lagos',
        category: 'entertainment',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
  //  return 400 for emppty name field
  it('should return 400 if name is empty', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .set('x-access-token', token)
      .send({
        name: '',
        details: 'Best Ict Resources',
        location: 'lagos',
        category: 'entertainment',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
});


// return 401 for a user that has not logged  in and wants to post a business
describe('POST businesses/', () => {
  it('should return 401, User not logged in', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/')
      .send(Business)
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
        done();
      });
  });
  // should return 401, User not logged in
  it('should return 401, User not logged in', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/2/reviews')
      .send({
        title: 'dangote international',
        location: 'kano',
        category: 'markets',
        description: 'very veryyyyyy nice',
        email: 'dangote@email.com',
        image: 'dangote.jpg'
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
        done();
      });
  });
});

// GET BUSINESSES

// should return 404 for s business not found
describe('GET businesses/', () => {
  it('should return 404 for a business not found', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/100')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});

//  Get all businesses
describe('GET businesses/', () => {
  it('should get all businesses', (done) => {
    chai.request(app)
      .get('/api/v1/businesses')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  // Get Individual Business
  describe('GET busineesses/1', () => {
    it('should be able to get a business', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/1')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          done();
        });
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

// GET BUSINESSES BY CATEGORY AND LOCATION

// Sorter Middleware
describe('GET businesses by sort-search', () => {
  it('should return 200', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=abuja')
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        done();
      });
  });
  // return 404 for wrong search by location param
  it('should return 404 for wrong params for search by location', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=qwertt')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
  // should return 200 for success in searching by category
  it('should return 200 for success in searching by category', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=entertainment')
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        done();
      });
  });
  //  should return 404 for wrong params for search by category
  it('should return 404 for wrong params for search by category', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=qwerty')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});

// GET/POST REVIEWS
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
      .get('/api/v1/business/45/reviews')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});
//  add a Review
describe('POST reviews/1', () => {
  it('should return 201. Able to add reviews to a business', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/2/reviews')
      .set('x-access-token', token)
      .send({
        review: 'great business i greattttttt!',
        businessId: 1,
        userId: 1
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(201);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  //  should return 404 for bad get reviews params
  it('should return 404 for bad get reviews params', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/3627827/reviews')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});


// UPDATE BUSINESS
//   Update a business
describe('PUT businesses/1', () => {
  it('should return 404, if business cannot be found', (done) => {
    chai.request(app)
      .put('/api/v1/businesses/beeen')
      .set('x-access-token', token)
      .send({
        name: 'Rotimi Texh',
        details: 'Software company',
        location: 'lagos',
        category: 'ICT',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});

// DELETE BUSINESSES
//  Test Delete business - Non existing businessId provided
it('Should return 404 if non existing businessId is provided to be deleted', (done) => {
  chai.request(app)
    .get('/api/v1/businesses/11111')
    .end((err, res) => {
      expect(res.status).to.equal(404);
      expect(res.body.message).to.equal('Business Not Found');
      done();
    });
});


//  Get Business Reviews
describe('Get business/1/reviews', () => {
  it('should be able to get reviews of a business', (done) => {
    chai.request(app)
      .get('/api/v1/business/1/reviews')
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        done();
      });
  });

  // GET A SINGLE BUSINESS
  //  wrong params to get a business should return 404
  it('should return 404 for wrong params to get a business', (done) => {
    chai.request(app)
      .get('/api/v1/business/57686866/reviews')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});
