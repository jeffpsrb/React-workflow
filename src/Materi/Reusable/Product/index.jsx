import React from "react";
import styled from "styled-components"
import Counter from "../Counter";

const imgProduct = "https://images.unsplash.com/photo-1692194740974-21e59c3bbbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
const CardContainer = styled.div `
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width:300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Image = styled.img ` 
    width: 100px;
`;

const Heading = styled.h1 `
    font-size: 18px;
`;

const Price = styled.p `
    color: grey;
    font-size: 22px;
`;
const Description = styled.p `
    font-size: small;
`;

export default class Product extends React.Component {

        
    handleValue = (data) => {
        this.props.receiveValue(data)
    }

    render() {
        return(
            <div>
                <CardContainer>
                    <Image src={imgProduct} alt="img" />
                    <Heading>Title Card</Heading>
                    <Price>$19.23</Price>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi perspiciatis velit? 
                        Veniam excepturi delectus obcaecati! Ratione eum nulla officiis dolore harum at, architecto ducimus esse enim ipsum quis iusto.</Description>
                    <Counter receiveValue={this.handleValue} />
                </CardContainer>
            </div>
        )
    }
}