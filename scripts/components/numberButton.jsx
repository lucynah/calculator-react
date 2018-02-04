import React from "react";
import PropTypes from "prop-types";

export default class NumberButton extends React.Component {
    constructor(props) {
        super(props);

        this.props.onClickCustomHandler

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    render() {
        return <button onClick={this.onClickHandler}> {this.props.numberToDisplay} </button>
    }
    onClickHandler(e) {
        this.props.onClickCustomHandler(this.props.numberToDisplay);
    }
}

NumberButton.propTypes = {
    numberToDisplay: PropTypes.number.isRequired,
    onClickCustomHandler: PropTypes.func
};