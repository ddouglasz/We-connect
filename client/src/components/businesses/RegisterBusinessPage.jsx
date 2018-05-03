import React from 'react';
import { PropTypes } from 'prop-types';
import RegisterBusiness from '../businesses/RegisterBusiness';
import { connect } from 'react-redux';
import   RegBusAction   from '../../actions/businessActions';
import { addFlashMessage } from '../../actions/flashMessages';

/**
 * Class component for Login page
*/
class RegisterBusinessPage extends React.Component {
    render() {
        const { RegBusAction, addFlashMessage } = this.props;
        return (
            <RegisterBusiness RegBusAction={RegBusAction} addFlashMessage={addFlashMessage} />
        );
    }
}

RegisterBusinessPage.propTypes = {
    RegBusAction: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { RegBusAction, addFlashMessage })(RegisterBusinessPage);
