const thing = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {}, "This is a h1 tag"),
    React.createElement("h2", {}, "This a h2 tag")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(thing);

//# sourceMappingURL=index.6bd02f5a.js.map
