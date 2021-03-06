import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import HomePage from '../../home/smart/HomePage.jsx';
import { LoginAction } from '../../../actions/authActions.js';
import { addFlashMessage } from '../../../actions/flashMessages.js';

/**
 * @class Login
*/
export class Login extends React.Component {
  /**
 * @description Class component for Login page
 * @param { function } function
 * @return { object } object
*/
  render() {
    const { LoginAction, addFlashMessage } = this.props;
    return (
    <div>
      <HomePage LoginAction={LoginAction} addFlashMessage={addFlashMessage} />
    </div>
    );
  }
}

Login.propTypes = {
  LoginAction: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(() => ({}), { LoginAction, addFlashMessage })(Login);
