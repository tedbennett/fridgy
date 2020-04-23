import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 8px;
    padding: 8px;
    border: 2px solid lightgrey;
    border-radius: 8px;
`;

export class FridgeItem extends Component {
    render() {
        return <Container>{this.props.item.title}</Container>;
    }
}

export default FridgeItem;
