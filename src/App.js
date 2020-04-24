import React, { Component } from "react";
import "@atlaskit/css-reset";
import FridgeList from "./FridgeList";
import initialData from "./initial-data";

class App extends Component {
    state= initialData;

    render() {
        return <FridgeList items={this.state} />;
    }
}

export default App;
