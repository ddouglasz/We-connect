import React from 'react';
import Routes from '../Routes';
import NavBar from '../components/home/NavBar.jsx';
import Footer from '../components/home/Footer.jsx';
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
