import React from "react";
import ReactDOM from "react-dom";

// React.createElement() ==> react Object is created ==> render() method will create HTMLElement
const header = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to Fundations of React!"
);

// JSX - is not HTM in JS but you can say JSX is XML like syntax
const jsxheader = <h1 id="jsxheading">Howdy React using JSX</h1>;
// ABOVE: JSX (transpiled before it reaches the JS)
//1. JSX is identified by Parcel bundler and handes it to Bable to transpile

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(jsxheader);
