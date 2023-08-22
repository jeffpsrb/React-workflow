import React from "react";

// variabel yang tidak di render (a, b, c, e)
export default class Variabel extends React.Component {
    state = {
        a: null,
        b: true,
        c: ' ',
        d: 0
    }

    render() {
        return(
            <div>
                <div>a: {this.state.a}</div>  
                <div>b: {this.state.b}</div>
                <div>c: {this.state.c}</div>
                <div>d: {this.state.d}</div>
                <div>e: {this.props.e}</div>
            </div>
        )
    }
}