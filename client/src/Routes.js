import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './components/home/HomePage';
import Login from './components/account/Login';
import SignUp from './components/account/SignUp';
import Logout from './components/account/Logout';
import BusinessCatalog from './components/businesses/BusinessCatalog';
import BusinessProfile from './components/businesses/BusinessProfile';
import RegBusiness from './components/businesses/RegBusiness';
import EditBusiness from './components/businesses/EditBusiness';
import UserProfile from './components/user/UserProfile';
import NotFound from './components/404Page';


const Routes = () => (
<Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/businessCatalog" component={BusinessCatalog} />
    <Route path="/businessProfile" component={BusinessProfile} />
    <Route path="/registerBusiness" component={RegBusiness} />
    <Route path="/editBusiness" component={EditBusiness} />
    <Route path="/userProfile" component={UserProfile} />
    <Route path="/logout" component={Logout} />
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Routes;
