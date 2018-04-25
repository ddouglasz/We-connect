import React from 'react';
import { PropTypes } from 'prop-types';
import toastr from 'toastr';
import HomePage from '../home/HomePage';
import { connect } from 'react-redux';
import { LoginAction } from '../../actions/LoginAction';

/**
 * Class component for Login page
*/
class Login extends React.Component {
  render() {
    const { LoginAction } = this.props;
    return (
      <HomePage LoginAction={ LoginAction } />
    );
  }
}

Login.propTypes = {
    LoginAction: PropTypes.func.isRequired
}

export default connect((state) => {return {}} , { LoginAction })(Login);
