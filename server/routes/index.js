import Businesses from '../controller/business';
import Users from '../controller/user';
import Reviews from '../controller/review';
import Validator from '../middlewares/postBusinessValidator';
import FilterBusinessSearch from '../middlewares/filterSearch';
import ReviewsValidator from '../middlewares/postReviewValidator';


export default (app) => {
  app.post('/api/v1/auth/signup', Users.signUp);
  // app.post('/api/v1/auth/login', Users.signIn);
  app.post('/api/v1/businesses', Validator.addBusinessValidator, Businesses.createBusinesses);
  app.get('/api/v1/businesses', FilterBusinessSearch.filterBusinessSearch, Businesses.getBusinesses);
  app.delete('/api/v1/businesses/:businessId', Businesses.removeBusiness);
  app.get('/api/v1/businesses/:businessId', Businesses.retrieveBusiness);
  app.put('/api/v1/business/:businessId', Businesses.updateBusiness);
  app.post('/api/v1/business/:businessId/reviews', ReviewsValidator.postReviewValidator, Reviews.postReview);
  app.get('/api/v1/business/:businessId/reviews', Reviews.getReviews);
};
