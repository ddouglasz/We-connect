import React from 'react';
import { PropTypes } from 'prop-types';
import toastr from 'toastr';
import SignUpForm from './SIgnUpForm';
import { connect } from 'react-redux';
import { SignUpAction } from '../../actions/SignUpAction';
import addFlashMessage from '../../actions/flashMessages';

/**
 * Class component for signing up page
*/
class SignUp extends React.Component {
  render() {
    const { SignUpAction, addFlashMessage } = this.props;
    return (
      <SignUpForm SignUpAction={SignUpAction} addFlashMessage={ addFlashMessage }/>
    );
  }
}

SignUp.propTypes = {
  SignUpAction: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
  
}

export default connect((state) =>  { return {}}, { SignUpAction, addFlashMessage })(SignUp);

