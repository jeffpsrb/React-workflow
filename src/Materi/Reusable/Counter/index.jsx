// ini merupakan child component dari component Product

import React from "react";
import styled from "styled-components"

const Qty = styled.p `
    font-size:22px;
    width: 600px;
`;

const Button = styled.button `
    border: none;
    outline: 0;
    padding: 12px;
    color: darkslategrey;
    background-color: lightgreen;
    text-align: center;
    cursor: pointer;
    font-size: 18px;

    &:hover {
        opacity: 0.7;
    }

`;

export default class Counter extends React.Component {
    state = {
        value: 0
    }
    hendleMinus = () => {
        this.setState({value: this.state.value - 1
        }, () => this.props.receiveValue(this.state.value));
    }
    hendlePlus = () => {
        this.setState({value: this.state.value + 1
        }, () => this.props.receiveValue(this.state.value))
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <Button onClick={this.hendleMinus}>-</Button>
                <Qty>{this.state.value}</Qty>
                <Button onClick={this.hendlePlus}>+</Button>
            </div>
        )
    }
}