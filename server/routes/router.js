import businesses from '../controllers/businesses';
import Users from '../controllers/users';
import postBusinessValidator from '../middlewares/postBusinessValidator';
import filterSearch from '../middlewares/filterSearch';
import ReviewsValidator from '../middlewares/postReviewValidator';
import validateUserSignUp from '../middlewares/signUpValidator';
import signinValidator from '../middlewares/signinValidator';
import auth from '../middlewares/auth';

export default (app) => {
  app.post('/api/v1/auth/signup', validateUserSignUp, Users.signUp);
  app.post('/api/v1/auth/login', signinValidator, Users.signIn);
  app.post('/api/v1/businesses', auth, postBusinessValidator, businesses.createBusinesses);
  app.get('/api/v1/businesses', filterSearch.filterBusinessSearch, businesses.getBusinesses);
  app.delete('/api/v1/businesses/:businessId', auth, businesses.deleteBusiness);
  app.get('/api/v1/businesses/:businessId', businesses.retrieveBusiness);
  app.put('/api/v1/businesses/:businessId', auth, businesses.updateBusiness);
  // app.post('/api/v1/businesses/:businessId/reviews', auth, ReviewsValidator.reviewsRatingsValidator, businesses.postReview);
  app.post('/api/v1/businesses/:businessId/reviews', auth, ReviewsValidator.postReviewValidator, businesses.postReview);
  app.get('/api/v1/businesses/:businessId/reviews', businesses.getReviews);
  app.get('/api/v1/businesses/:userId/userProfile', Users.getUserProfile);
};
