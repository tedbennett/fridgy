import React, { Component } from "react";
import styled from "styled-components";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import moment from "moment";
import { DateTime } from "react-datetime-bootstrap";

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

export class AddItemModal extends Component {
    state = {
        form: {
            title: "",
            quantity: "",
            expiry: moment().add(7, "days"),
        },
    };
    onNameChange = (event) => {
        if (event.target.value.match("^[a-zA-Z ]*$") != null) {
            this.setState({
                form: { ...this.state.form, title: event.target.value },
            });
        }
    };

    onQuantityChange = (event) => {
        const newNumber = Number(event.target.value);
        if (!isNaN(newNumber)) {
            this.setState({
                form: { ...this.state.form, quantity: newNumber },
            });
        }
    };

    onExpiryChange = (date) => {
        const newDate = moment(date);
        if (newDate.isValid()) {
            this.setState({ form: { ...this.state.form, expiry: newDate } });
        }
    };

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
                                        <Form.Control
                                            placeholder="Enter Name"
                                            value={this.state.form.title}
                                            maxLength={50}
                                            onChange={this.onNameChange.bind(
                                                this
                                            )}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formGroupQuantity">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control
                                            placeholder="Enter Quantity"
                                            value={this.state.form.quantity}
                                            maxLength={2}
                                            onChange={this.onQuantityChange.bind(
                                                this
                                            )}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formGroupExpiry">
                                        <Form.Label>Expiry Date</Form.Label>
                                        <DateTime
                                            pickerOptions={{ format: "LL" }}
                                            value={this.state.form.expiry}
                                            onChange={this.onExpiryChange.bind(
                                                this
                                            )}
                                        />
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
                            onClick={this.props.addItem.bind(this, this.state.form)}
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
