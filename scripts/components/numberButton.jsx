import React from "react";
import PropTypes from "prop-types";

const buttonStyle = {
    color: "black",
    background: "white",
    font: "bold",
    width: "50px",
    height: "50px",
    fontSize: "16px",
    borderRadius: "4px"
}

export default class NumberButton extends React.Component {
    constructor(props) {
        super(props);

        this.props.onClickCustomHandler

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    render() {
        return <button style={buttonStyle} onClick={this.onClickHandler}> {this.props.numberToDisplay} </button>
    }
    onClickHandler(e) {
        this.props.onClickCustomHandler(this.props.numberToDisplay);
    }
}

NumberButton.propTypes = {
    numberToDisplay: PropTypes.string,
    onClickCustomHandler: PropTypes.func
};