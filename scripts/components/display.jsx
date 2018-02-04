import React from "react";
import PropTypes from "prop-types";

export default class Display extends React.Component {
    
    render(){
        return <h1>{this.props.content}</h1>
    }
}