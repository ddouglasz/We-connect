import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return <div className="jumbotron jumbotron-fluid  home-wrapper-index">
        <div className="jumbotron-cover">
          <div className="row">
            <div className="col-md-5">
              <div className="form-action" id="welcomeText">
                <h1>
                  <a>WEConnect</a> you to your next business.
                </h1>
              </div>
            </div>
            <div className="form-card col-sm-2 .btn1-spacing" />
            <div className="col-sm-4">
              <div className="card  text-center card-form" id="loginForm">
                <div className="card-body">
                  <h4>
                    <a>Welcome to WEConnect</a>
                  </h4>
                  <a>To network with other businesses, sign in here </a>
                  {/* <form> */}

                  <form className="form-signin">
                    <div className="row" />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group  form-spacing">
                          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon" style={{ width: 2.6 + "rem" }}>
                              <i className="fa  font-a fa-at" />
                            </div>
                            <input type="text" name="email" className="form-control" id="email" placeholder="E-Mail Address*" required autoFocus />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group  form-spacing">
                          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon" style={{ width: 2.6 + "rem" }}>
                              <i className="fa font-a  fa-key" />
                            </div>
                            <input type="password" name="password" className="form-control text-white" id="password" placeholder="Password*" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-lg btn-primary   btn-decor btn-block" type="submit">
                      Sign in
                    </button>
                  </form>

                  <hr />
                  <h6 className="font-weight-light">
                    New user?
                    <a> | </a>
                    <Link to="/signup" className="nav-link text">Sign Up</Link>
                  </h6>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>;
}

export default HomePage;
