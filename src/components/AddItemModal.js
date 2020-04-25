import React, { Component } from "react";
import styled from "styled-components";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import moment from "moment";
import {DateTime} from "react-datetime-bootstrap";

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
    title: "Beef",
    quantity: 3,
    expiry: moment("2020-04-30"),
};

export class AddItemModal extends Component {
    render() {
        return (
            <ModalBackground>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={this.props.closePopup}>
                        <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formGroupTitle">
                                        <Form.Label>Item Name</Form.Label>
                                        <Form.Control placeholder="Enter name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formGroupQuantity">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Quantity"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGroupExpiry">
                                    <Form.Label>Expiry Date</Form.Label>
                                    <DateTime pickerOptions={{format:"LL"}} value={moment().add(7,'days')}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            onClick={this.props.closePopup}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={this.props.addItem.bind(this, newItem)}
                            variant="primary"
                        >
                            Add Item
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </ModalBackground>
        );
    }
}

export default AddItemModal;
