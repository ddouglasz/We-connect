import React from 'react';
import { PropTypes } from 'prop-types';
import toastr from 'toastr';
import SignUpForm from './SIgnUpForm';
import { connect } from 'react-redux';
import { signupAction } from '../../actions/signupActions';

/**
 * Class component for signing up page
*/
class SignUp extends React.Component {
  render() {
    const { signupAction } = this.props;
    return (
      <SignUpForm signupAction={signupAction} />
    );
  }
}

SignUp.propTypes = {
  signupAction: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { signupAction })(SignUp);

