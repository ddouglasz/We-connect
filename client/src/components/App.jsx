import React from 'react';
import Routes from '../Routes';
import { Route, Switch } from 'react-router';
import NavBar from '../components/home/NavBar.jsx';
import Footer from '../components/home/Footer.jsx';
import styles from '../public/styles/main.scss'

const App = () => (
  <div>
    <NavBar />
    <Routes />
    <Footer />
  </div>
);

export default App;
