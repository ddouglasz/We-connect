import React from 'react';
import { Route, Switch } from 'react-router';
import NavBar from './components/home/NavBar';
import HomePage from './components/home/HomePage';
import SignUp from './components/account/SignUp';
import Login from './components/account/Login';
import BusinessCatalog from './components/businesses/BusinessCatalog';
import BusinessProfile from './components/businesses/BusinessProfile';
import RegisterBusinessPage from './components/businesses/RegisterBusinessPage';
import RegisterBusiness from './components/businesses/RegisterBusiness';
import EditBusiness from './components/businesses/EditBusiness';
import UserProfile from './components/user/UserProfile';
import NotFound from './components/404Page';
import Footer from './components/home/Footer';
import styles from '../src/public/styles/main.scss'


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/Signup" exact component={SignUp} />
    <Route path="/businessCatalog"  exact component={BusinessCatalog} />
    <Route path="/businessProfile/:id"  exact component={BusinessProfile} />
    <Route path="/registerBusiness"  exact component={RegisterBusinessPage} />
    <Route path="/editBusiness/:id"  exact component={EditBusiness} />
    <Route path="/userProfile"  exact component={UserProfile} />
    <Route path="/logout"  exact component={HomePage} />
    <Route path="/*"  exact component={NotFound} />
  </Switch> 
);

export default Routes;
