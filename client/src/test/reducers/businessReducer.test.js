import businessReducer from '../../reducers/businessReducer';
import {
  ALL_BUSINESSES,
  PAGINATION, ONE_BUSINESS,
  ALL_REVIEWS, ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILED, DELETE_FAILED,
  DELETE_SUCCESSFUL, EDIT_SUCCESSFUL,
  EDIT_FAILED, GET_USER_PROFILE_SUCCESSFUL,
  GET_USER_PROFILE_FAILED,
  EDIT_USER_SUCCESSFUL,
  EDIT_USERFAILED
} from '../../actions/types';

const initialState = {
  userProfile: {
    businesses: []
  },
  userEdited: false,
  businesses: [],
  business: {},
  pagination: {},
  oneBusiness: {},
  allReviews: [],
  isCreated: false,
  hasError: false,
  userFound: false,
  reviewAdded: '',
  error: ''
};

describe(' business reducer testing', () => {
  it('Should set all businesses in the state when passed with ALL_BUSINESSES action type', () => {
    const businesses = [{
      id: 1,
      title: 'hotels.ng',
      description: 'luxury apartments',
      category: 'luxury'
    }];
    const action = {
      type: ALL_BUSINESSES,
      businesses
    };
    const newState = businessReducer(initialState, action);
    expect(newState.businesses[0].id).toEqual(1);
    expect(newState.businesses[0].title).toEqual('hotels.ng');
  });

  it('Should set pagination details in the state when passed with PAGINATION action type', () => {
    const pagination = {
      limit: 6,
      count: 8,
      pages: 2,
      presentPage: 1,
      pageSize: 6
    };
    const action = {
      type: PAGINATION,
      pagination
    };
    const newState = businessReducer(initialState, action);
    expect(newState.pagination.limit).toEqual(6);
    expect(newState.pagination.presentPage).toEqual(1);
  });

  it('Should set a single business details in the state when passed with ONE_BUSINESS action type', () => {
    const oneBusiness = {
      id: 2,
      title: 'airbnb',
      description: 'luxury apartments',
      category: 'travel'
    };
    const action = {
      type: ONE_BUSINESS,
      oneBusiness
    };
    const newState = businessReducer(initialState, action);
    expect(newState.oneBusiness.id).toEqual(2);
    expect(newState.oneBusiness.title).toEqual('airbnb');
  });

  it('Should set all reviews in the state for a given business when passed with ALL_REVIEWS action type', () => {
    const allReviews = {
      Reviews: {
        count: 1,
        rows: [{
          id: 3,
          review: 'great place to stay'
        }]
      }
    };
    const action = {
      type: ALL_REVIEWS,
      allReviews
    };
    const newState = businessReducer(initialState, action);
    expect(newState.allReviews.Reviews.count).toEqual(1);
    expect(newState.allReviews.Reviews.rows[0].id).toEqual(3);
    expect(newState.allReviews.Reviews.rows[0].review).toEqual('great place to stay');
  });

  it('Should set reviews in the state for a given business when passed with ADD_REVIEW_SUCCESS action type', () => {
    // initialState.reviewAdded = 'successfully added a review';

    const action = {
      type: ADD_REVIEW_SUCCESS,
      review: 'successfully added a review'
    };
    const newState = businessReducer(initialState, action);
    expect(newState.reviewAdded).toEqual('successfully added a review');
    // expect(newState.allReviews.Reviews.rows[0].id).toEqual(3);
  });

  it('Should set error string in the state for a given business when passed with ADD_REVIEW_FAILED action type', () => {
    const action = {
      type: ADD_REVIEW_FAILED,
      error: 'review content should have between 2 and 100 characters'
    };
    const newState = businessReducer(initialState, action);
    expect(newState.error).toEqual('review content should have between 2 and 100 characters');
  });

  it('Should set a string in the state for a given business when passed with DELETE_SUCCESSFUL action type', () => {
    const action = {
      type: DELETE_SUCCESSFUL,
      message: 'business deleted successfully'
    };
    const newState = businessReducer(initialState, action);
    expect(newState.message).toEqual('business deleted successfully');
  });

  it('Should set error string in the state for a given business when passed with DELETE_FAILED action type', () => {
    const action = {
      type: DELETE_FAILED,
      error: 'business internal server error'
    };
    const newState = businessReducer(initialState, action);
    expect(newState.error).toEqual('business internal server error');
  });

  it('Should set a string in the state for a given business when passed with EDIT_SUCCESSFUL action type', () => {
    const action = {
      type: EDIT_SUCCESSFUL,
      business: 'successfully updated'
    };
    const newState = businessReducer(initialState, action);
    expect(newState.business).toEqual('successfully updated');
  });

  it('Should set error in the state for a given business when passed with EDIT_FAILED action type', () => {
    const action = {
      type: EDIT_FAILED,
      error: 'internal server error'
    };
    const newState = businessReducer(initialState, action);
    expect(newState.error).toEqual('internal server error');
  });

  it('Should set a string in the state for a given business when passed with EDIT_USER_SUCCESSFUL action type', () => {
    const action = {
      type: EDIT_USER_SUCCESSFUL,
      business: 'user edited successfully'
    };
    const newState = businessReducer(initialState, action);
    expect(newState.business).toEqual('user edited successfully');
  });

  it('Should set error in the state for a given user when passed with EDIT_USERFAILED action type', () => {
    const action = {
      type: EDIT_USERFAILED,
      error: 'internal server error'
    };
    const newState = businessReducer(initialState, action);
    expect(newState.error).toEqual('internal server error');
  });

  it('Should set a string in the state for a given business when passed with GET_USER_PROFILE_SUCCESSFUL action type', () => {
    const action = {
      type: GET_USER_PROFILE_SUCCESSFUL,
      userProfile: {
        firstName: 'jerry',
        lastName: 'jerrycoco',
        bio: 'jerrycoco loves roasted yam and pepper stew'
      }
    };
    const newState = businessReducer(initialState, action);
    expect(newState.userProfile.firstName).toEqual('jerry');
    expect(newState.userProfile.lastName).toEqual('jerrycoco');
    expect(newState.userProfile.bio).toEqual('jerrycoco loves roasted yam and pepper stew');
  });

  it('Should set error in the state for a given user when passed with GET_USER_PROFILE_FAILED action type', () => {
    const action = {
      type: GET_USER_PROFILE_FAILED,
      error: 'failed to edit user due to internal server errors'
    };
    const newState = businessReducer(initialState, action);
    expect(newState.error).toEqual('failed to edit user due to internal server errors');
  });

  it('Should return a default state when no action type is passed', () => {
    const action = {};
    const newState = businessReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
