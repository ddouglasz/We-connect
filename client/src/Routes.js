import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './components/home/smart/HomePage.jsx';
import SignUp from './components/account/smart/SignUp.jsx';
import Login from './components/account/smart/Login.jsx';
import BusinessCatalog from './components/businesses/smart/BusinessCatalog.jsx';
import BusinessProfile from './components/businesses/smart/BusinessProfile.jsx';
import RegisterBusinessPage from './components/businesses/smart/RegisterBusinessPage.jsx';
import EditBusiness from './components/businesses/smart/EditBusiness.jsx';
import UserProfile from './components/user/smart/UserProfile.jsx';
import NotFound from './components/404Page.jsx';
import AuthenticatedComponent from './helpers/routeVerification';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/Signup" exact component={SignUp} />
    <Route path="/businessCatalog" exact component={BusinessCatalog} />
    <Route path="/businessProfile/:id" exact component={AuthenticatedComponent(BusinessProfile)} />
    <Route path="/registerBusiness" exact component={AuthenticatedComponent(RegisterBusinessPage)} />
    <Route path="/editBusiness/:id" exact component={AuthenticatedComponent(EditBusiness)} />
    <Route path="/userProfile" exact component={AuthenticatedComponent(UserProfile)} />
    <Route path="/logout" exact component={HomePage} />
    <Route path="/*" exact component={NotFound} />
  </Switch>
);

export default Routes;
