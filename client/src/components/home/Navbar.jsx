import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" id="btn-nav" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/" className="nav-link text">
          <span>WEConnect</span>
        </Link>
        <Link to="/businessCatalog" className="nav-link text">
          <span>Catalog</span>
        </Link>
        <Link to="/businessProfile" className="nav-link text">
          <span>Profiles</span>
        </Link>
       

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" />
          <Link to="/editBusiness" className="nav-link text">
          <span>Edit Business</span>
        </Link>
        <Link to="/registerBusiness" className="nav-link text">
          <span>Register Business</span>
        </Link>
          <form className="form-index form-inline my-2 my-lg-0">
            <Link to="/login" className="nav-link text">
              <span>Sign In</span>
            </Link>
            <Link to="/signup" className="nav-link text">
              <span>Sign up</span>
            </Link>
            <Link to="/logout" className="nav-link text">
              <span>Log Out</span>
            </Link>
          </form>
        </div>
      </nav>;
}

export default NavBar;
