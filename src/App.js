import React from "react";
import "@atlaskit/css-reset";
import FridgeList from "./FridgeList";
import initialData from "./initial-data";

function App() {
    return <FridgeList items={initialData} />;
}

export default App;
