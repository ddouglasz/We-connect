import React from 'react';
import { PropTypes } from 'prop-types';
import RegisterBusiness from '../businesses/RegisterBusiness';
import { connect } from 'react-redux';
import   { RegisterBusinessAction }  from '../../actions/businessActions';
import { addFlashMessage } from '../../actions/flashMessages';

/**
 * Class component for Login page
*/
class RegisterBusinessPage extends React.Component {
    render() {
        const { RegisterBusinessAction, addFlashMessage } = this.props;
        return (
            <RegisterBusiness RegisterBusinessAction={RegisterBusinessAction} addFlashMessage={addFlashMessage} />
        );
    }
}

RegisterBusinessPage.propTypes = {
    RegisterBusinessAction: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { RegisterBusinessAction, addFlashMessage })(RegisterBusinessPage);
