import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';

/**
 * @description Review list component
 * @param {Object} AuthComponent
 * @return {*} void
 */
export default function (AuthComponent) {
  /**
 * @description Review list component
 * @export {Object}
 * @class  AuthVerification
 * @extends {Component}
 */
  class AuthVerification extends Component {
    /**
   * @description Higher Order Component
   * @returns {null} Authenticated component
   * @memberof AuthVerification
   */
    componentWillMount() {
      const { history } = this.context.router;
      if (this.props.isAuthenticated === false) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'please Login to access this page'
        });
        return history.push('/');
      }
    }

    /**
   * @memberof AuthVerification
   * @return {ReactElement} markup
   */
    render() {
      return (
    <AuthComponent {...this.props} />
      );
    }
  }

  AuthVerification.contextTypes = {
    router: PropTypes.object.isRequired
  };

  AuthVerification.propTypes = {
    signout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps, { addFlashMessage })(AuthVerification);
}

