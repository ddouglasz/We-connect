import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { classnames } from 'classnames';
import { LoginAction } from '../../actions/authActions';
import { addFlashMessage } from '../../actions/flashMessages';



class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: [],
      isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: [], isLoading: true });
    this.props.LoginAction(this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Login successful!'
        })
        this.context.router.history.push('/businessCatalog')
      },
      ({ response }) => this.setState({ errors: response.data.message, isLoading: false })
    );
  }


  render() {
    const { errors } = this.state;
    return (
      <div className="jumbotron jumbotron-fluid  home-wrapper-index" onSubmit={this.onSubmit} >
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

                  <form className="form-signin" >
                    <div className="row" />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group  form-spacing">
                          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon" style={{ width: 2.6 + "rem" }}>
                              <i className="fa  font-a fa-at" />
                            </div>
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              id="email"
                              placeholder="E-Mail Address*"
                              value={this.state.email}
                              onChange={this.onChange}
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
                            <div className="input-group-addon" style={{ width: 2.6 + "rem" }}>
                              <i className="fa font-a  fa-key" />
                            </div>
                            <input
                              type="password"
                              name="password"
                              className="form-control text-white"
                              id="password"
                              placeholder="Password*"
                              value={this.state.password}
                              onChange={this.onChange}
                              required
                              autoFocus
                            />
                          </div>
                        </div>
                        {errors && <span className="help-block text-danger">{errors}</span>}
                      </div>
                    </div>
                    <button
                     disabled={this.state.isLoading}
                      className="btn btn-lg btn-primary   
                      btn-decor btn-block" >
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  LoginAction: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}
HomePage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default HomePage;
