import React from "react";
//import Hello from ".";
import Bar from "./Bar";
import Product from "./Product";


export default class Reausable extends React.Component {

    state = {
        value: 0
    }
    handleValue = (data) => {
        this.setState({
            value: data
        });

    }
    render(){
        return(
            <div>
                {/* contoh penerapan reusable component */}
                <Bar value={this.state.value}/>
                <Product receiveValue= {this.handleValue}/>

            </div>
        )
    }
}