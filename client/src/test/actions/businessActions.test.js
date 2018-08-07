import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ALL_BUSINESSES, PAGINATION, ONE_BUSINESS, EDIT_SUCCESSFUL, EDIT_FAILED, DELETE_SUCCESSFUL, DELETE_FAILED } from '../../actions/types';
import { registerBusinessAction, getBusinessAction, getAllBusinessSearchAction, getOneBusinessAction, editBusinessAction, deleteBusinessAction } from '../../actions/businessActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authActions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch 200 status along with successfully requested businesses', (done) => {
    moxios.stubRequest('api/v1/businesses', {
      status: 200,
      response: {
        token
      }
    });

    const userProfile = {
      username: 'mi',
      password: 'ki'
    };

    const store = mockStore({});
    return store.dispatch(registerBusinessAction(userProfile))
      .then(() => {
        expect(store.getActions().length).toBe(0);
        done();
      });
  });

  it('should dispatch pagination details data for a business catalog page', (done) => {
    const page = 1;
    moxios.stubRequest(`api/v1/businesses?page=${page || 1}`, {
      status: 200,
      response: {
        businesses: {},
        pagination: {}
      }
    });
    const expectedActions = [
      {
        type: ALL_BUSINESSES,
        businesses: {}
      },
      {
        type: PAGINATION,
        pagination: {}
      }
    ];

    const store = mockStore({});
    return store.dispatch(getBusinessAction(page))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(2);
        done();
      });
  });

  it('should dispatch businesses by search action of location or category', (done) => {
    const searchType = 'location';
    const keyValue = 'sao paulo';
    moxios.stubRequest(`api/v1/businesses?${searchType}=${keyValue}`, {
      status: 200,
      response: {
        businesses: {}
      }
    });
    const expectedActions = [
      {
        type: ALL_BUSINESSES,
        businesses: {}
      }
    ];

    const store = mockStore({});
    return store.dispatch(getAllBusinessSearchAction(searchType, keyValue))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });

  it('should dispatch get business action for a search for a single business', (done) => {
    const id = 1;
    moxios.stubRequest(`/api/v1/businesses/${id}`, {
      status: 200,
      response: {
        business: {}
      }
    });
    const expectedActions = [
      {
        type: ONE_BUSINESS,
        oneBusiness: {}
      }
    ];

    const store = mockStore({});
    return store.dispatch(getOneBusinessAction(id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });

  it('should dispatch an edit business action data for a successful business edit', (done) => {
    const business = { id: 1 };
    moxios.stubRequest(`/api/v1/businesses/${business.id}`, {
      status: 200,
      response: {
        business: {}
      }
    });
    const expectedActions = [
      {
        type: EDIT_SUCCESSFUL,
        business: 'Sucessfully Updated'
      }
    ];

    const store = mockStore({});
    return store.dispatch(editBusinessAction(business))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });

  it('should dispatch not edit business action data for a unsuccessful business edit and return an error message', (done) => {
    const business = { id: 1 };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: 'Your business did not update'
      });
    });
    const expectedActions = [
      {
        type: EDIT_FAILED,
        error: 'Your business did not update'
      }
    ];

    const store = mockStore({});
    return store.dispatch(editBusinessAction(business))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });

  it('should dispatch a message for a business that was not successfully deleted', (done) => {
    const id = 1;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'Your business wasnt successfully deleted'
        }
      });
    });
    const expectedActions = [
      {
        type: DELETE_FAILED,
        error: 'Your business wasnt successfully deleted'
      }
    ];

    const store = mockStore({});
    return store.dispatch(deleteBusinessAction(id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });

  it('should dispatch delete data for a business that was successfully deleted', (done) => {
    const id = 1;
    moxios.stubRequest(`/api/v1/businesses/${id}`, {
      status: 200,
      response: {
        message: 'Your business was successfully deleted'
      }
    });
    const expectedActions = [
      {
        type: DELETE_SUCCESSFUL,
        message: 'Your business was successfully deleted'
      }
    ];

    const store = mockStore({});
    return store.dispatch(deleteBusinessAction(id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });
});
