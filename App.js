import React from "react";
import ReactDOM from "react-dom";

// React.createElement() ==> react Object is created ==> render() method will create HTMLElement
const header = React.createElement("h1", {}, "Welcome to Fundations of React!");

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(header);
