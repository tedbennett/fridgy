import styled from "styled-components";
import FridgeItem from "./FridgeItem";

import React, { Component } from "react";
const Container = styled.div`
    margin: auto;
    width: 50%;
`;

const Title = styled.h3`
    padding: 8px;
`;

export class FridgeList extends Component {
    render() {
        return (
            <Container>
                <Title>What's In Your Fridge?</Title>
                <div>
                    {this.props.items
                        .sort((a, b) => a.expiry > b.expiry)
                        .map((item) => (
                            <FridgeItem key={item.id} item={item} />
                        ))}
                </div>
            </Container>
        );
    }
}

export default FridgeList;
