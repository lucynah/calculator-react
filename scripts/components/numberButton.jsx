import React from "react";
import PropTypes from "prop-types";

const buttonStyle = {
    display: "inline-block",
    textAlign: "center",
    borderStyle: "solid",
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
        return <div style={buttonStyle} onClick={this.onClickHandler}> {this.props.numberToDisplay} </div>
    }
    onClickHandler(e) {
        this.props.onClickCustomHandler(this.props.numberToDisplay);
    }
}

NumberButton.propTypes = {
    numberToDisplay: PropTypes.string,
    onClickCustomHandler: PropTypes.func
};