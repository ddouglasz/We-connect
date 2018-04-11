import React from 'react';
import Routes from '../Routes';
import { Route, Switch } from 'react-router';
import NavBar from '../components/home/NavBar.jsx';
import Footer from '../components/home/Footer.jsx';



const App = () => (
  <div className="container">
    <NavBar />
    <Routes />
    <Footer />
  </div>
);

export default App;
