import React from 'react';
import { PropTypes } from 'prop-types';
/**
 * @class SignUpForm
*/
export class SignUpForm extends React.Component {
  /**
 * @description Class component for Sogn up form
 * @param { object } props
 * @return { object } object
*/
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: [],
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  /**
 * @description onChange
 * @param { object } event
 * @return { object } object
*/
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
 * @description onChange
 * @param { object } event
 * @return { object } object
*/
  onSubmit(event) {
    event.preventDefault();
    this.setState({ errors: [], isLoading: true });
    this.props.SignUpAction(this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'signed up successfully!'
        });
        this.context.router.history.push('/UserProfile');
      },
      ({ response }) => this.setState({ errors: response.data.message, isLoading: false })
    );
  }
  /**
 * @description Component for the signup form.
 * @param { Array } errors
 * @return { object } object
*/
  render() {
    const { errors } = this.state;
    return (
      <div className="gen background" onSubmit={this.onSubmit}>
        <div className="signup-page-background">
          <form className="form-signup form-spacing" >
            <div className="row">
              <div className="col-sm-12">
                <div className="form-actions">
                  <h2 className="form-signup-heading text-white">Sign Up</h2>
                </div>
              </div>
            </div>
            <div className="signup-input-style">
              <div className="row">
                <div className="col-md-12">
                   <div className="form-group form-spacing">
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div className="input-group-addon" style={{ width: `${2.6}rem` }} >
                        <i className="fa font-a fa-user" />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control text-white"
                        id="signup-firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                     </div>
                    </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group form-spacing">
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div className="input-group-addon" style={{ width: `${2.6 }rem` }} >
                        <i className="fa font-a fa-user" />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control text-white"
                        id="signup-lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group  form-spacing">
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div className="input-group-addon" style={{ width: `${2.6 }rem` }}>
                        <i className="fa font-a fa-at" />
                      </div>
                      <input
                        type="text"
                        name="email"
                        className="form-control text-white"
                        id="signup-email"
                        placeholder="E-Mail Address"
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
                      <div className="input-group-addon" style={{ width: `${2.6 }rem` }}>
                        <i className="fa font-a fa-key" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control text-white"
                        id="signup-password"
                        placeholder="Password*"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>
                {errors && <span className="help-block text-danger" id="signup-errors"><div className="form-action">{errors}</div></span> }
                </div>
              </div>
            </div>
            <button disabled={this.state.isLoading} className="btn  btn-decor btn-success btn-block" id="signup-btn">
              <i className="fa font-b fa-user-plus" />
            </button>
          </form>
        </div>
      </div>

    );
  }
}
SignUpForm.propTypes = {
  SignUpAction: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};
SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};


export default SignUpForm;
