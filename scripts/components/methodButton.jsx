import React from "react";
import PropTypes from "prop-types";

const buttonStyle = {
    color: "red",
    background: "white",
    width: "50px",
    height: "50px",
    fontSize: "16px",
    borderRadius: "4px"
}

export default class MethodButton extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    render() {
        return <button style={buttonStyle} onClick={this.onClickHandler}> {this.props.methodToDisplay} </button>
    }
    onClickHandler(e) {
        if (this.props.onClickCustomHandler) {
            this.props.onClickCustomHandler(this.props.method);
        }
    }
}

MethodButton.propTypes = {
    methodToDisplay: PropTypes.string.isRequired,
    onClickCustomHandler: PropTypes.func
};
