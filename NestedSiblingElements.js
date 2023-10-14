/*
 * Create below DOM using react
 * <div id="nparent">
 *      <div id="nchild">
 *          <h5>Nested React structure heading4!</h5>
 *          <h6>Nested React structure heading4!</h6>
 *      </div>
 * </div>
 *
 */
const nparent = React.createElement(
  "div",
  { id: "nparent" },
  React.createElement("div", { id: "nchild" }, [
    React.createElement("h5", {}, "Nested React structure with sibling h6!"),
    React.createElement("h6", {}, "Nested React structure with sibling h5!"),
  ])
);
const reactNestedSiblingRoot = ReactDOM.createRoot(
  document.getElementById("nestedRootWithChild")
);
reactNestedSiblingRoot.render(nparent);
