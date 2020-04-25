import React, { Component } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";

const ModalBackground = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

const newItem = {
    id: 4,
    title: 'Beef',
    quantity: 3,
    expiry: moment("2020-04-30")
}


export class AddItemModal extends Component {
    render() {
        return (
            <ModalBackground>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={this.props.closePopup} >
                        <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>

                    <Modal.Body></Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.closePopup} variant="secondary">Cancel</Button>
                        <Button onClick={this.props.addItem.bind(this, newItem)} variant="primary">Add Item</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </ModalBackground>
        );
    }
}

export default AddItemModal;
