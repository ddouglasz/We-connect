import PropTypes from 'prop-types';
import React from'react';

export default function BusinessList({ businesses }) {
    const emptyMessage = (
        <p>There are no businesses yet in the database</p>
    );
    return (
        <div>
{ businesses === 0 ? emptyMesage : BusinessList }
        </div>
    );
}

BusinessList.proptypes = {
    BusinessList: PropTypes.array.isRequired
}
