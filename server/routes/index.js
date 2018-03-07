import Businesses from '../controller/business';
import Users from '../controller/user';// eslint-disable-line no-unused-vars
import Reviews from '../controller/review'; // eslint-disable-line no-unused-vars
import businesses from '../model/business'; // eslint-disable-line no-unused-vars
import Validator from '../middlewares/createBusinessValidator';
// import validateGetBusiness from '../middlewares/getBusinessValidator';
import FilterBusinessSearch from '../middlewares/filterSearch';
import validatePostreview from '../middlewares/postReviewValidator';
// import validateGetReviews from '../middlewares/filterSearch';


export default (app) => {
  app.post('/api/v1/businesses', Validator.addBusinessValidator, Businesses.createBusinesses);
  app.get('/api/v1/businesses', FilterBusinessSearch.filterBusinessSearch, Businesses.getBusinesses);
  app.delete('/api/v1/businesses/:businessId', Businesses.removeBusiness);
  app.get('/api/v1/businesses/:businessId', Businesses.retrieveBusiness);
  app.put('/api/v1/business/:businessId', Businesses.updateBusiness);
  app.post('/api/v1/business/:businessId/reviews', validatePostreview, Reviews.postReview);
  app.get('/api/v1/business/:businessId/reviews', Reviews.getReviews);
};

// ValidateId,
// , validateGetBusiness
// validateGetReviews
