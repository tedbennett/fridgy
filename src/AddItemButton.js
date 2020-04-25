import styled from "styled-components";
import React, { Component } from 'react';
import moment from "moment";

const Container = styled.div`
    margin: 8px;
    padding: 8px;
    background-color: DodgerBlue;
    border-radius: 8px;
    text-align: center;
    color: white;
`;
  
export class AddItemButton extends Component {
    render() {
        return (
            <Container onClick={this.props.togglePopup}>
                Add Item
            </Container>
        )
    }
}

export default AddItemButton
