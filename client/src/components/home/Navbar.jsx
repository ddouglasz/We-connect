import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends React.Component {
  render() {
    // const NavBar = () => {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link to="/businessCatalog" className="nav-link text">
            <span>Catalog</span>
          </Link>
        </ul>
        <form className="form-inline nav-close my-sm-0" >
          <Link to="/editBusiness" className="nav-link text">
            <span>Edit Business</span>
          </Link>
        </form >
        <form className="form-inline nav-close my-sm-0">
          <Link to="/registerBusiness" className="nav-link text ">
            <span >Register Business</span>
          </Link>
        </form>
        <form className="form-inline nav-close my-sm-0">
          <Link to="/" className="nav-link text">
            <span>Log Out</span>
          </Link>
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
    <Link to="/" className="navbar-brand">
      <span>WEConnect</span>
    </Link>
    
      {isAuthenticated ? userLinks : guestLinks}
    {/* </div> */}
  </nav>
);
  }
}

// export default NavBar;
NavBar.propTypes = {
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
   return {
    auth: state.auth
  }; 
}

export default connect(mapStateToProps)(NavBar);

