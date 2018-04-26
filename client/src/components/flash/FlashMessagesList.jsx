import React from 'react';
import { PropTypes } from 'prop-types';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux'; 

class FlashMessagesList extends React.Component {
    render() {
        const messages = this.props.messages.map(message =>
            <FlashMessage Key={message.id} message={message} />
        );
        return (
            <div>
                {messages}
            </div>
        );
    }
}


FlashMessagesList.propTypes = {
    messages: PropTypes.array.isRequired
}


function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps)(FlashMessagesList);
