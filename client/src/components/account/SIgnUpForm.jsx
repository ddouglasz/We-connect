import React from 'react';
import { PropTypes } from 'prop-types'; 
import { Link } from 'react-router-dom';
import { signupAction } from "../../actions/signupActions";
// import InputField from '../common/InputField';
// import SignUp from     './SignUp';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
   // handleChange(event) {
  //   const entries = this.state.data;
  //   entries[event.target.id] = event.target.value;
  //   this.setState({ data: entries });
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

onSubmit(e) {
e.preventDefault();
this.props.signupAction(this.state);
}

  render() {


    //   const propTypes = {
    //   onChange: PropTypes.func,
    //   onClickSave: PropTypes.func,
    //   firstName: PropTypes.string,
    //   lastName: PropTypes.string,
    //   email: PropTypes.string,
    //   password: PropTypes.string,
    // }


    // function SignUpForm ({
    //   firstName, onChange, lastName, email, password, onClickSave
    // } ) {
    return (
      // <form onSubmit={this.onSubmit}>
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
                      <div className="input-group-addon" style={{ width: 2.6 + 'rem' }} >
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
                        dataerror="First Name is required"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group form-spacing">
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div className="input-group-addon" style={{ width: 2.6 + 'rem' }} >
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
                      <div className="input-group-addon" style={{ width: 2.6 + 'rem' }}>
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
                        // required
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
                      <div className="input-group-addon" style={{ width: 2.6 + 'rem' }}>
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
                        // required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn  btn-decor btn-success btn-block" >
              <i className="fa font-b fa-user-plus" />
            </button>
          </form>
        </div>
      </div>
      // </form>

    );
  }
}
SignUpForm.propTypes = {
  signupAction: PropTypes.func.isRequired
}

export default SignUpForm;
