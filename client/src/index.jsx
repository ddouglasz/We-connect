import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  App  from './components/App';
import styles from '../src/public/styles/main.scss'
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import setAuth from '../src/helper/setAuth';
import { currentUser } from './actions/LoginAction';
import  jwt  from 'jsonwebtoken';


const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const localTokenStore = localStorage.userToken;
if (localTokenStore) {
  setAuth(localTokenStore);
 store.dispatch(currentUser(jwt.decode(localTokenStore)));
}



ReactDOM.render(
  <div>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </div>,
  document.getElementById('app')
);
