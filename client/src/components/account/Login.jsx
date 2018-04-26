import React from 'react';
import { PropTypes } from 'prop-types';
import toastr from 'toastr';
import HomePage from '../home/HomePage';
import { connect } from 'react-redux';
import { LoginAction } from '../../actions/LoginAction';
import addFlashMessage from '../../actions/flashMessages';

/**
 * Class component for Login page
*/
class Login extends React.Component {
  render() {
    const { LoginAction, addFlashMessage } = this.props;
    return (
      <HomePage LoginAction={ LoginAction} addFlashMessage={addFlashMessage} />
    );
  }
}

Login.propTypes = {
     LoginAction: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired 
}

export default connect((state) => {return {}} , { LoginAction, addFlashMessage })(Login);
