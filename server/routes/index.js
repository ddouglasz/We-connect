import Businesses from '../controllers/businesses';
import Users from '../controllers/users';
import addBusinessValidator from '../middlewares/postBusinessValidator';
import FilterBusinessSearch from '../middlewares/filterSearch';
import ReviewsValidator from '../middlewares/postReviewValidator';
import validateUserSignUp from '../middlewares/signUpValidator';
import validateUserSignIn from '../middlewares/signinValidator';
import auth from '../middlewares/auth';

export default (app) => {
  app.post('/api/v1/auth/signup', validateUserSignUp, Users.signUp);
  app.post('/api/v1/auth/login', validateUserSignIn, Users.signIn);
  app.post('/api/v1/businesses', auth, addBusinessValidator, Businesses.createBusinesses);
  // app.get('/api/v1/businesses', Businesses.getBusinesses);
  app.get('/api/v1/businesses', FilterBusinessSearch.filterBusinessSearch, Businesses.getBusinesses);
  app.delete('/api/v1/businesses/:businessId', auth, Businesses.deleteBusiness);
  app.get('/api/v1/businesses/:businessId', Businesses.retrieveBusiness);
  app.put('/api/v1/business/:businessId', auth, Businesses.updateBusiness);
  app.post('/api/v1/business/:businessId/reviews', auth, ReviewsValidator.postReviewValidator, Businesses.postReview);
  app.get('/api/v1/business/:businessId/reviews', Businesses.getReviews);
};
