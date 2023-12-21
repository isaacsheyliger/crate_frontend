import React from "react";
import PropTypes from "prop-types";

function Error(props) {
    const error = props.code;
    let errorMessage = '';

    if (error === 404)
        errorMessage = 'Page not Found'

    return(
        <div className="hero is-fullheight-with-navbar err">
            Error {error}: {errorMessage}
        </div>
    )
}

Error.propTypes = {
    username: PropTypes.string
}

export default Error;