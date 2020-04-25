import styled from "styled-components";
import React, { Component } from "react";
import { Item } from "./FridgeItem";

const AddItem = styled(Item)`
    background-color: DodgerBlue;
    text-align: center;
    color: white;
`;

export class AddItemButton extends Component {
    render() {
        return <AddItem onClick={this.props.togglePopup}>Add Item</AddItem>;
    }
}

export default AddItemButton;
