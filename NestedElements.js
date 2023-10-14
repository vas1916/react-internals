/*
 * Create below DOM using react
 * <div id="parent">
 *      <div id="child">
 *          <h4>Nested React structure heading4!</h4>
 *      </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h4", {}, "Nested React structure heading4")
  )
);
const reactNestedRoot = ReactDOM.createRoot(
  document.getElementById("nestedroot")
);
reactNestedRoot.render(parent);
