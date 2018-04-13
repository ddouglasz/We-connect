import React from 'react';
import {link} from 'react-router-dom';

const SignUp = () => {
    return(
  <div className="gen background">
    <div className="signup-page-background">
      <form className="form-signup form-spacing">
        <div className="row">
          <div className="col-sm-12">
            <div className="form-actions">
              <h2 className="form-signup-heading text-white">Sign Up</h2>
            </div>
          </div>
        </div>
<div class="signup-input-style">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group form-spacing">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" style={{width: 2.6 + 'rem'}} >
                  <i className="fa font-a fa-user" />
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-control text-white"
                  id="signup-firstName"
                  placeholder="First Name"
                  required
                  autoFocus
                />
              </div>
            </div>
          </div>

<div className="col-md-12">
            <div className="form-group form-spacing">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" style={{width: 2.6 + 'rem'}} >
                  <i className="fa font-a fa-user" />
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-control text-white"
                  id="signup-lastName"
                  placeholder="Last Name"
                  required
                  autoFocus
                />
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group  form-spacing">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" style={{width: 2.6 + 'rem'}}>
                  <i className="fa font-a fa-at" />
                </div>
                <input
                  type="text"
                  name="signup-email"
                  className="form-control text-white"
                  id="signup-email"
                  placeholder="E-Mail Address"
                  required
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group  form-spacing">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" style={{width: 2.6 + 'rem'}}>
                  <i className="fa font-a fa-key" />
                </div>
                <input
                  text-white
                  type="password"
                  name="signup-password"
                  className="form-control text-white"
                  id="signup-password"
                  placeholder="Password*"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        <button type="submit" className="btn  btn-decor btn-success btn-block">
          <i className="fa font-b fa-user-plus" />
        </button>
      </form>
    </div>
   </div>
 
);
}

export default SignUp;
