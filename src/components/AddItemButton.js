import styled from "styled-components";
import React, { Component } from "react";
import { Item } from "./FridgeItem";
import { Button } from "react-bootstrap";

const AddItem = styled(Item)`
    background-color: DodgerBlue;
    text-align: center;
    color: white;
`;

export class AddItemButton extends Component {
    // render() {
    //     return <AddItem onClick={this.props.togglePopup}>Add Item</AddItem>;
    // }
    render() {
        return <Button onClick={this.props.togglePopup} variant="primary" size="lg" block>Add Item</Button>
    }

}

export default AddItemButton;
