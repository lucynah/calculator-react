import React from "react";
import PropTypes from "prop-types";

export default class MethodButton extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    render() {
        return <button onClick={this.onClickHandler}> {this.props.methodToDisplay} </button>
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
