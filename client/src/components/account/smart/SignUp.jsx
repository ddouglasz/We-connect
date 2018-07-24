import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import SignUpForm from '../smart/SignUpForm.jsx';
import { SignUpAction } from '../../../actions/authActions';
import { addFlashMessage } from '../../../actions/flashMessages';

/**
 * @class SignUp
*/
class SignUp extends React.Component {
  /**
 * @description Class component for Sogn up page
 * @param { function } function
 * @return { object } object
*/
  render() {
    const { LoginAction, addFlashMessage } = this.props;
    return (
      <SignUpForm
      SignUpAction={SignUpAction}
      addFlashMessage={addFlashMessage}
      />
    );
  }
}

SignUp.propTypes = {
  SignUpAction: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(() => ({}), { SignUpAction, addFlashMessage })(SignUp);

