import React, { Component } from "react";
import styled from "styled-components";

const PopupBackground = styled.div`
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

const PopupBody = styled.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    border-radius: 20px;
    background: white;
`;

export class AddItemPopup extends Component {
    render() {
        return (
            <PopupBackground>
                <PopupBody>
                    Add your item here!
                <button onClick={this.props.closePopup}>Close popup</button>
                </PopupBody>
            </PopupBackground>
        );
    }
}

export default AddItemPopup;
