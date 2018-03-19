import chai from 'chai';
import chaiHttp from 'chai-http';
// import app from '../../../app';
// import middleware from '.././middlewares/postBusinessValidator';
import FilterBusinessSearch from '.././middlewares/filterSearch';
import Validator from '.././middlewares/postBusinessValidator';


chai.use(chaiHttp);
const { expect } = chai;
const filter = FilterBusinessSearch.filterBusinessSearch;
const postBusiness = Validator.addBusinessValidator;
// const { query } = filterBusinessSearch;

/*
  * Test FILTER BUSINESS FUNCTION
  */
describe('MIDDLEWARE TESTS', () => {
  describe('Test register business function', () => {
    it('should return a function()', () => {
      expect(filter).to.be.a('function');
    });

    it('should accept three arguments', () => {
      expect(filter.length).to.equal(3);
    });
  });
  /*
  * Test POST BUSINESS FUNCTION
  */
  describe('Test post business function', () => {
    it('should return a function()', () => {
      expect(postBusiness).to.be.a('function');
    });

    it('should accept three arguments', () => {
      expect(postBusiness.length).to.equal(3);
    });
  });
});
