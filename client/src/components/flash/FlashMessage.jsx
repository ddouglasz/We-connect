import React from 'react';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';


class FlashMessage extends React.Component {
    render() {
        const { id, type, text } = this.props.message;
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })} >
            <button className="close"><span>&times;</span></button>
            {text}
              </div>
        );
    }
}

FlashMessage.propTypes = {
message: PropTypes.object.isRequired
}

export default FlashMessage;
