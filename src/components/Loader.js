import PropTypes from 'prop-types'
import React from 'react';

import "components/Loader.scss";

const Loader = (props) => {
    return (

        <div className="loader-wrapper">
            <div className="loader">{props.message}</div>
        </div>

    )
};

export default Loader;

Loader.propTypes = {
  message: PropTypes.string.isRequired
};