import businesses from '../controllers/businesses';
import Users from '../controllers/users';
import addBusinessValidator from '../middlewares/postBusinessValidator';
import filterBusinessSearch from '../middlewares/filterSearch';
import ReviewsValidator from '../middlewares/postReviewValidator';
import validateUserSignUp from '../middlewares/signUpValidator';
import validateUserSignIn from '../middlewares/signinValidator';
import auth from '../middlewares/auth';

export default (app) => {
  app.post('/api/v1/auth/signup', validateUserSignUp, Users.signUp);
  app.post('/api/v1/auth/login', validateUserSignIn, Users.signIn);
  app.post('/api/v1/businesses', auth, addBusinessValidator, businesses.createBusinesses);
  // app.get('/api/v1/businesses', Businesses.getBusinesses);
  app.get('/api/v1/businesses', filterBusinessSearch.filterBusinessSearch, businesses.getBusinesses);
  app.delete('/api/v1/businesses/:businessId', auth, businesses.deleteBusiness);
  app.get('/api/v1/businesses/:businessId', businesses.retrieveBusiness);
  app.put('/api/v1/business/:businessId', auth, businesses.updateBusiness);
  app.post('/api/v1/business/:businessId/reviews', auth, ReviewsValidator.postReviewValidator, businesses.postReview);
  app.get('/api/v1/business/:businessId/reviews', businesses.getReviews);
};
