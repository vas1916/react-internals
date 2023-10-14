//creating h3 element using react
const reactHeading = React.createElement(
  "h3",
  { id: "react-heading" },
  "Hello World using React!"
);

console.log("@reactHeading is react object not <h3> element", reactHeading);

//creating react root
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
//rendering rect element inside react root
reactRoot.render(reactHeading);
