import React from 'react';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';

/**
 * @class FlashMessage
*/
class FlashMessage extends React.Component {
/**
 * @param {object} props
*/
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  /**
   * @returns {function} deleteFlashMessage
   */
  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }
  /**
   * @returns {function} deleteFlashMessage
   */
  render() {
    setTimeout(() => {
      document.getElementById('close').click();
    }, 2000);
    const { type, text } = this.props.message;
    return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })} >
            <button onClick={this.onClick} className="close" id="close"><span>&times;</span></button>
            {text}
              </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
