import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../app';

const { expect, assert, should } = chai;
should();

chai.use(chaiHttp);

describe('TEST for app.js', () => {
  describe('When user sends a GET request to /api/v1/', () => {
    it('should return a status 200 and a response message', () => {
      chai.request(app)
        .get('api/v1/')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'We-connect you on port 8001'
          );
        });
    });
  });
});
