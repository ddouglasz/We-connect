import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import { Provider } from 'react-redux';
import 'rc-pagination/assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import '../src/public/styles/main.scss';
import rootReducer from './reducers/rootReducer';
import setAuth from '../src/helpers/setAuth';
import App from './components/App.jsx';
import { currentUser } from './actions/authActions';


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
