import React from 'react';
import { Route, Switch } from 'react-router';
import NavBar from './components/home/NavBar';
import HomePage from './components/home/HomePage';
import SignUp from './components/account/SignUp';
import BusinessCatalog from './components/businesses/BusinessCatalog';
import BusinessProfile from './components/businesses/BusinessProfile';
import RegisterBusiness from './components/businesses/RegisterBusiness';
import UserProfile from './components/user/UserProfile';
import NotFound from './components/404Page';
import Footer from './components/home/Footer';


const Routes = () => (
  <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/Login" exact component={HomePage} />
      <Route path="/Signup" exact component={SignUp} />
      <Route path="/businessCatalog"  exact component={BusinessCatalog} />
      <Route path="/businessProfile"  exact component={BusinessProfile} />
      <Route path="/registerBusiness"  exact component={RegisterBusiness} />
      <Route path="/editBusiness"  exact component={RegisterBusiness} />
      <Route path="/userProfile"  exact component={UserProfile} />
      <Route path="/logout"  exact component={HomePage} />
      <Route path="/*"  exact component={NotFound} />
      </Switch> 
  );

export default Routes;
