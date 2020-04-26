import React, { Component } from "react";
import FridgeList from "./components/FridgeList";
import initialData from "./initial-data";
import AddItemModal from "./components/AddItemModal";

class App extends Component {
    state = { items: [], showPopup: false };

    togglePopup = () => {
        console.log(this.state.showPopup);
        this.setState({
            showPopup: !this.state.showPopup,
        });
    };

    addItem = (newItem) => {
        this.setState((prevState) => ({
            items: [...prevState.items, newItem],
            showPopup: !this.state.showPopup,
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
                    <AddItemModal addItem = {this.addItem.bind(this)} closePopup={this.togglePopup.bind(this)} />
                ) : null}
            </div>
        );
    }
}

export default App;
