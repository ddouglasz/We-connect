import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../actions/authActions';

/**
   * @description - class component for the navvbar
   * @class BusinessCatalog
   */
export class NavBar extends React.Component {
  /**
   * @param {Object} event
   * @return {function} function
   */
  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.context.router.history.push('/');
  }
  /**
   * @return {function} function
   */
  render() {
    const { isAuthenticated } = this.props.auth;
    const userLinks = (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link to="/businessCatalog" className="nav-link text">
            <span>Catalog</span>
          </Link>
        </ul>
        <form className="form-inline nav-close my-sm-0">
          <Link to="/registerBusiness" className="nav-link text reg">
            <span >Register Business</span>
          </Link>
        </form>
        <form className="form-inline nav-close my-sm-0" >
          <Link to="/userProfile" className="nav-link text">
            <span>My Profile</span>
          </Link>
        </form >
        <form className="form-inline nav-close my-sm-0">
          <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
        </form>
      </div>
    );

    const guestLinks = (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link to="/businessCatalog" className="nav-link text">
            <span>Catalog</span>
          </Link>
        </ul>
        <form className="form-inline nav-close my-sm-0" >
          <Link to="/signup" className="nav-link text">
            <span>Sign up</span>
          </Link>
        </form>
        <form className="form-inline nav-close my-sm-0">
          <Link to="/" className="nav-link text">
            <span>Sign In</span>
          </Link>
        </form>
      </div>
    );

    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" id="btn-nav" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="#" className="navbar-brand">
          <span>WEConnect</span>
        </Link>
        {isAuthenticated ? userLinks : guestLinks}
      </nav>
    );
  }
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

NavBar.contextTypes = {
  router: PropTypes.object.isRequired
};
/**
   * @param {object} state
   * @return {function} function
   */
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavBar);
