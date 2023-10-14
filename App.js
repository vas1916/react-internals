import React from "react";
import ReactDOM from "react-dom";

// JSX - is not HTM in JS but you can say JSX is XML like syntax
const jsxheader = <h1 id="jsxheading">Howdy React using JSX</h1>;
// ABOVE: JSX (transpiled before it reaches the JS)
//1. JSX is identified by Parcel bundler and handes it to Bable to transpile

// React Functional Component
const HeaderComponent = () => {
  return <h1>React Functional Component</h1>;
};

//Component Composition
const ComponentComposition = () => {
  return (
    <div>
      <HeaderComponent />
      <h1>Component Composition is inheriting another component</h1>
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

// jsxheader react element is rendered
//reactRoot.render(jsxheader);

//render functional component
reactRoot.render(<ComponentComposition />);
