import React, { Component } from 'react'
import styled from 'styled-components';
import FridgeItem from './FridgeItem';

const Container = styled.div`
    margin: auto;
    width: 50%;

`;

const Title = styled.h3``;

export class FridgeList extends Component {
    render() {
        return (
            <Container>
                <Title>What's In Your Fridge</Title>
                <FridgeItem></FridgeItem>
            </Container>
        )
    }
}

export default FridgeList
