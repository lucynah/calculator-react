import React from "react";
import PropTypes from "prop-types";

const buttonStyle = {
    display: "inline-block",
    textAlign: "center",
    borderStyle: "solid",
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
        return <div style={buttonStyle} onClick={this.onClickHandler}> {this.props.methodToDisplay} </div>
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
