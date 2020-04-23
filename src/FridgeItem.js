import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 8px;
    padding: 8px;
    border: 2px solid lightgrey;
    border-radius: 8px;
`;

const QuantityBox = styled.div`
    width: 5%;
    height: 100%;
    display: inline-block;
`;

const TitleBox = styled.div`
    width:85%;
    display: inline-block;
`;

const ExpiryBox = styled.div`
    display: inline-block;
    width:10%;
    text-align:right;
`;

export class FridgeItem extends Component {
    render() {
        return <Container>
            <QuantityBox>{this.props.item.quantity}x</QuantityBox>
            
            <TitleBox>{this.props.item.title}</TitleBox>
            
            <ExpiryBox>{this.props.item.expiry}</ExpiryBox>
            </Container>;
    }
}

export default FridgeItem;
