import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import MethodButton from "./components/methodButton.jsx";
import NumberButton from "./components/numberButton.jsx";
import Display from "./components/display.jsx";
import Methods from "./models/Methods.js";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOnDisplay: 0,
            currentMethod: Methods.ADD,
            solution: 0
        };
        this.onNumberClick = this.onNumberClick.bind(this);
        this.onMethodClick = this.onMethodClick.bind(this);
    };
    render() {
        console.log(this.state.numberOnDisplay);
        return <div>
            <Display content={this.state.numberOnDisplay} />
            <NumberButton numberToDisplay={7} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={8} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={9} onClickCustomHandler={this.onNumberClick} />
            <MethodButton methodToDisplay={'*'} method={Methods.MULTIPLY} onClickCustomHandler={this.onMethodClick} /><br />
            <NumberButton numberToDisplay={4} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={5} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={6} onClickCustomHandler={this.onNumberClick} />
            <MethodButton methodToDisplay={'/'} method={Methods.DIVIDE} onClickCustomHandler={this.onMethodClick} /><br />
            <NumberButton numberToDisplay={1} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={2} onClickCustomHandler={this.onNumberClick} />
            <NumberButton numberToDisplay={3} onClickCustomHandler={this.onNumberClick} />
            <MethodButton methodToDisplay={'+'} method={Methods.ADD} onClickCustomHandler={this.onMethodClick} /><br />
            <NumberButton numberToDisplay={0} onClickCustomHandler={this.onNumberClick} />
            <MethodButton methodToDisplay={'.'} onClickCustomHandler={this.onMethodClick} />
            <MethodButton methodToDisplay={'='} method={Methods.CALCULATE} onClickCustomHandler={this.onMethodClick} />
            <MethodButton methodToDisplay={'-'} method={Methods.SUB} onClickCustomHandler={this.onMethodClick} />
        </div>
    }

    onMethodClick(method) {
        if (this.state.currentMethod === Methods.ADD) {
            this.setState(function (prevState, props) {
                return {
                    solution: prevState.solution + prevState.numberOnDisplay,
                    numberOnDisplay: 0,
                    currentMethod: method
                };
            });
        }
        else if (this.state.currentMethod === Methods.SUB) {
            this.setState(function (prevState, props) {
                return {
                    solution: prevState.solution - prevState.numberOnDisplay,
                    numberOnDisplay: 0,
                    currentMethod: method
                };
            })
        }
        else if (this.state.currentMethod === Methods.DIVIDE) {
            this.setState(function (prevState, props) {
                return {
                    solution: prevState.solution / prevState.numberOnDisplay,
                    numberOnDisplay: 0,
                    currentMethod: method
                };
            });
        }
        else if (this.state.currentMethod === Methods.MULTIPLY) {
            this.setState(function (prevState, props) {
                return {
                    solution: prevState.solution * prevState.numberOnDisplay,
                    numberOnDisplay: 0,
                    currentMethod: method
                };
            });
        }

        if (method === Methods.CALCULATE) {
            this.setState(function (prevState, props) {
                return {
                    solution: prevState.solution,
                    numberOnDisplay: prevState.solution,
                    currentMethod: method
                };
            });
        }
        // this.setState({
        //     ...newState,
        //     numberOnDisplay: 0,
        //     currentMethod: method
        // })
        console.log("clicked method!", method);
        console.log(this.state.lastNumber)
    }

    onNumberClick(number) {
        this.setState(function (prevState, props) {
            return {
                numberOnDisplay: prevState.numberOnDisplay * 10 + number
            };
        });
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('content')
);
/*
1. na podst aktualnej metody wykonujemy działanie
2. wynik działa zapisujemy w solution
3. method => current method
4. numberondisplay = 0
5. jeżeli emthod === calculate to numberOnDisplay : solution

*/