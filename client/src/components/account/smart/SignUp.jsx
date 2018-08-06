import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import SignUpForm from '../smart/SignUpForm.jsx';
import { SignUpAction } from '../../../actions/authActions';
import { addFlashMessage } from '../../../actions/flashMessages';

/**
 * @class SignUp
*/
export class SignUp extends React.Component {
  /**
 * @description Class component for Sogn up page
 * @param { function } function
 * @return { object } object
*/
  render() {
    const { SignUpActionRequest, addFlashMessageRequest } = this.props;
    return (
      <div>
      <SignUpForm
      SignUpAction={SignUpActionRequest}
      addFlashMessage={addFlashMessageRequest}
      />
      </div>
    );
  }
}

SignUp.propTypes = {
  SignUpActionRequest: PropTypes.func.isRequired,
  addFlashMessageRequest: PropTypes.func.isRequired
};

export default connect(() => ({}), {
  SignUpActionRequest: SignUpAction, addFlashMessageRequest: addFlashMessage
})(SignUp);

