import React from 'react';
import {link} from 'react-router-dom';

const SignUp = () => {
    return(
  <div className="gen background">
    <div className="signup-page-background">
      <form className="form-signup form-spacing">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="form-actions">
              <h2 className="form-signup-heading text-white">Sign Up</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group form-spacing">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" style={{width: 2.6 + 'rem'}} >
                  <i className="fa fa-user" />
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-control text-whit"
                  id="name1"
                  placeholder="Name"
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
                  <i className="fa fa-at" />
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control text-whit"
                  id="name2"
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
                  <i className="fa fa-key" />
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="name3"
                  placeholder="Password"
                  required
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
                  <i className="fa fa-repeat" />
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="name4"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn  btn-decor btn-success btn-block">
          <i className="fa font-a fa-user-plus" />
        </button>
      </form>
    </div>
  </div>
);
}

export default SignUp;
