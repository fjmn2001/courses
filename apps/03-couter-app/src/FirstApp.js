import React from "react";
import PropTypes from "prop-types";

const FirstApp = ({greeting, subtitle}) => {

    if (!greeting) {
        throw new Error("The greeting is required.");
    }

    return (
        <>
            <h1>{greeting}</h1>
            <p>{subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'I am a subtitle'
}

export default FirstApp;