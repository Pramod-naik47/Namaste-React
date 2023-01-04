const heading1 = React.createElement(
    tagName = "h1",
    options = {
        id : "title1",
        key : "title1"
    },
    "Namaste Everyone"
);

const heading2 = React.createElement(
    tagName = "h2",
    options = {
        id : "title2",
        key : "title2"
    },
    "Namaste React"
);

const container = React.createElement(
    tagName = "div",

    options = {
        id : "container"
    },
    [heading1, heading2]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);