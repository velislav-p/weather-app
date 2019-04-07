import PropTypes from 'prop-types'
import React from 'react';

const Loader = (props) => {
    return (

        <div className="">
            <div className="loader">{props.message}</div>
        </div>

    )
};

export default Loader;

Loader.propTypes = {
  message: PropTypes.string.isRequired
};