import React, { Component } from "react";
import "@atlaskit/css-reset";
import FridgeList from "./FridgeList";
import initialData from "./initial-data";
import AddItemPopup from "./AddItemPopup";

class App extends Component {
    state = { items: initialData, showPopup: false };

    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    };

    onAddItem = (newItem) => {
        this.setState((prevState) => ({
            items: [...prevState.items, newItem],
        }));
    };

    render() {
        return (
            <div>
                <FridgeList
                    items={this.state.items}
                    togglePopup={this.togglePopup}
                />
                {this.state.showPopup ? (
                    <AddItemPopup
                        closePopup={this.togglePopup.bind(this)}
                    />
                ) : null}
            </div>
        );
    }
}

export default App;
