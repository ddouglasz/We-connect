// import { Route, Switch } from 'react-router';
import React from 'react';
import Routes from '../Routes';
import NavBar from '../components/home/smart/NavBar.jsx';
import Footer from '../components/home/presentational/Footer.jsx';
// import styles from '../public/styles/main.scss';
// import flashMessages from '../reducers/flashMessages';
import FlashMessageList from './flash/FlashMessagesList.jsx';

const App = () => (
  <div>
    <NavBar />
    <FlashMessageList />
    <Routes />
    <Footer />
  </div>
);

export default App;
