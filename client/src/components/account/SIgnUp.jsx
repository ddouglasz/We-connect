import React from 'react';
import { PropTypes } from 'prop-types';
import toastr from 'toastr';
import SignUpForm from './SIgnUpForm';
import { connect } from 'react-redux';
import { SignUpAction } from '../../actions/SignUpAction';

/**
 * Class component for signing up page
*/
class SignUp extends React.Component {
  render() {
    const { SignUpAction } = this.props;
    return (
      <SignUpForm SignUpAction={SignUpAction} />
    );
  }
}

SignUp.propTypes = {
  SignUpAction: PropTypes.func.isRequired
}

export default connect((state) =>  null, { SignUpAction })(SignUp);

