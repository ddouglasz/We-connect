import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './components/home/HomePage.jsx';
import SignUp from './components/account/SignUp.jsx';
import Login from './components/account/Login.jsx';
import BusinessCatalog from './components/businesses/BusinessCatalog.jsx';
import BusinessProfile from './components/businesses/BusinessProfile.jsx';
import RegisterBusinessPage from './components/businesses/RegisterBusinessPage.jsx';
import EditBusiness from './components/businesses/EditBusiness.jsx';
import UserProfile from './components/user/UserProfile.jsx';
import NotFound from './components/404Page.jsx';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/SignUp" exact component={SignUp} />
    <Route path="/businessCatalog" exact component={BusinessCatalog} />
    <Route path="/businessProfile/:id" exact component={BusinessProfile} />
    <Route path="/registerBusiness" exact component={RegisterBusinessPage} />
    <Route path="/editBusiness/:id" exact component={EditBusiness} />
    <Route path="/userProfile" exact component={UserProfile} />
    <Route path="/logout" exact component={HomePage} />
    <Route path="/*" exact component={NotFound} />
  </Switch>
);

export default Routes;
