import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import MethodButton from "./methodButton.jsx";
import NumberButton from "./numberButton.jsx";
import Display from "./display.jsx";
import Methods from "../models/Methods.js";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOnDisplay: '',
            currentMethod: Methods.ADD,
            solution: 0,
            isShiftPressed: false
        };
        this.onNumberClick = this.onNumberClick.bind(this);
        this.onMethodClick = this.onMethodClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);

        this.onShiftKeyUp = this.onShiftKeyUp.bind(this);
        this.onShiftKeyDown = this.onShiftKeyDown.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    };
    render() {
        return <div>
            <Display content={this.state.numberOnDisplay} />
            <NumberButton numberToDisplay={'7'} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={'8'} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={'9'} onClickCustomHandler={this.onNumberClick} />
            <MethodButton methodToDisplay={'*'} method={Methods.MULTIPLY} onClickCustomHandler={this.onMethodClick} /><br />
            <NumberButton numberToDisplay={'4'} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={'5'} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={'6'} onClickCustomHandler={this.onNumberClick} />
            <MethodButton methodToDisplay={'/'} method={Methods.DIVIDE} onClickCustomHandler={this.onMethodClick} /><br />
            <NumberButton numberToDisplay={'1'} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={'2'} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={'3'} onClickCustomHandler={this.onNumberClick} />
            <MethodButton methodToDisplay={'+'} method={Methods.ADD} onClickCustomHandler={this.onMethodClick} /><br />
            <NumberButton numberToDisplay={'0'} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={'.'} onClickCustomHandler={this.onNumberClick} />
            <MethodButton methodToDisplay={'='} method={Methods.CALCULATE} onClickCustomHandler={this.onMethodClick} />
            <MethodButton methodToDisplay={'-'} method={Methods.SUB} onClickCustomHandler={this.onMethodClick} />
            <MethodButton methodToDisplay={'C'} method={Methods.CLEAR} onClickCustomHandler={this.onClearClick} />
        </div>
    }

    onShiftKeyUp(e) {
        if (e.keyCode === 16) {
            this.setState({
                isShiftPressed: false
            });
        }
    }

    onShiftKeyDown(e) {
        if (e.keyCode === 16) {
            this.setState({
                isShiftPressed: true
            });
        }
    }

    onKeyDown(event) {
        const keyCode = event.keyCode;
        if (keyCode === 13 || (keyCode === 187 && !this.state.isShiftPressed)) {
            this.onMethodClick(Methods.CALCULATE);
        }
        if ((keyCode < 58 && keyCode > 47) || keyCode === 190) {
            this.onNumberClick(event.key);
        }
        if (keyCode === 187 && this.state.isShiftPressed) {
            this.onMethodClick(Methods.ADD);
        }
        if (keyCode === 189) {
            this.onMethodClick(Methods.SUB);
        }
        if (keyCode === 56 && this.state.isShiftPressed) {
            this.onMethodClick(Methods.MULTIPLY);
        }
        if (keyCode === 191) {
            this.onMethodClick(Methods.DIVIDE);
        }
        if (keyCode === 27) {
            this.onClearClick();
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onShiftKeyUp);
        document.addEventListener("keydown", this.onShiftKeyDown);
        document.addEventListener("keydown", this.onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onShiftKeyUp);
        document.removeEventListener("keydown", this.onShiftKeyDown);
        document.removeEventListener("keydown", this.onKeyDown);
    }

    onClearClick() {
        this.setState(function (prevState, props) {
            return {
                numberOnDisplay: '',
                currentMethod: Methods.ADD,
                solution: 0
            };
        });
    }

    onMethodClick(method) {
        if (this.state.currentMethod === Methods.ADD) {
            this.setState(function (prevState, props) {
                const solution = prevState.solution + parseFloat(prevState.numberOnDisplay);

                return {
                    solution: solution,
                    numberOnDisplay: solution.toString(),
                    currentMethod: method
                };
            });
        }
        else if (this.state.currentMethod === Methods.SUB) {
            this.setState(function (prevState, props) {
                const solution = prevState.solution - parseFloat(prevState.numberOnDisplay);

                return {
                    solution: solution,
                    numberOnDisplay: solution.toString(),
                    currentMethod: method
                };
            })
        }
        else if (this.state.currentMethod === Methods.DIVIDE) {
            this.setState(function (prevState, props) {
                const solution = prevState.solution / parseFloat(prevState.numberOnDisplay);

                return {
                    solution: solution,
                    numberOnDisplay: solution.toString(),
                    currentMethod: method
                };
            });
        }
        else if (this.state.currentMethod === Methods.MULTIPLY) {
            this.setState(function (prevState, props) {
                const solution = prevState.solution * parseFloat(prevState.numberOnDisplay);

                return {
                    solution: solution,
                    numberOnDisplay: solution.toString(),
                    currentMethod: method
                };
            });
        }
        if (method === Methods.CALCULATE) {
            this.setState(function (prevState, props) {

                return {
                    solution: prevState.solution,
                    numberOnDisplay: prevState.solution.toString(),
                    currentMethod: method
                };
            });
        }
    }

    onNumberClick(number) {
        const isCurrentNumberASolution = this.state.numberOnDisplay === this.state.solution.toString();

        if (this.state.currentMethod === Methods.CALCULATE) {
            this.setState(function (prevState, props) {
                return {
                    numberOnDisplay: '',
                    currentMethod: Methods.ADD,
                    solution: 0
                }
            });
        }
        if ((this.state.numberOnDisplay === '' || isCurrentNumberASolution) && number === '0') {
            return;
        }
        if (this.state.numberOnDisplay.indexOf('.') > -1 && number === '.' && !isCurrentNumberASolution) {
            return;
        }
        if ((this.state.numberOnDisplay === '' || isCurrentNumberASolution) && number === '.') {
            this.setState(function (prevState, props) {
                return {
                    numberOnDisplay: '0'
                };
            });
        }
        if (isCurrentNumberASolution && number !== '.') {
            this.setState(function (prevState, props) {
                return {
                    numberOnDisplay: number.toString()
                };
            });
        }
        else {

            this.setState(function (prevState, props) {
                return {
                    numberOnDisplay: prevState.numberOnDisplay + number.toString()
                };
            });
        }
    }
}