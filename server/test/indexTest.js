import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';

const { expect, should } = chai;
should();

chai.use(chaiHttp);

describe('TEST for app.js', () => {
  describe('When user sends a GET request to /api/v1/', () => {
    it('should return a status 200 and a response message', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });
});
