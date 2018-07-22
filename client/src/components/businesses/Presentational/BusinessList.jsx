import React from 'react';
import PropTypes from 'prop-types';


/**
   * @param {Object} businesses
   * @return {function} function
   */
export default function BusinessList({ businesses }) {
  const emptyMessage = (
        <p>There are no businesses yet in the database</p>
  );
  return (
        <div>
            {businesses === 0 ? emptyMessage : BusinessList}
        </div>
  );
}

BusinessList.proptypes = {
  BusinessList: PropTypes.array.isRequired,
  businesses: PropTypes.Object.isRequired
};
