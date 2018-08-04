import moxios from 'moxios';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import configureMockStore from 'redux-mock-store';
import { SignUpAction, LoginAction, logout } from '../../actions/authActions';
import { CURRENT_USER, ALL_REVIEWS, ADD_REVIEW_SUCCESS } from '../../actions/types';
import { getReviewsAction, postReviewAction } from '../../actions/reviewsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authActions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch login data for a successful login', (done) => {
    const id = 1;
    moxios.stubRequest(`/api/v1/businesses/${id}/reviews`, {
      status: 200,
      response: {
        businessdata: {}
      }
    });

    const expectedActions = [{
      type: ALL_REVIEWS,
      allReviews: {}
    }];

    const store = mockStore({});
    return store.dispatch(getReviewsAction(id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });

  it('should dispatch login data for a successful login', (done) => {
    const id = 1;
    moxios.stubRequest(`/api/v1/businesses/${id}/reviews`, {
      status: 200
    });

    const expectedActions = [{
      type: ADD_REVIEW_SUCCESS,
      review: 'successfully added a review'
    }];

    const store = mockStore({});
    return store.dispatch(postReviewAction({}, id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });
});
