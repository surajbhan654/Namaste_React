const heading = React.createElement("h1", {id : "heading"}, "Hello World from React!");
 //i can give any attribute inside {} 
 //createElement is not creating the html element, it is creating the object
 //i am putting that object inside render function, it converts react element into html.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);