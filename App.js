import React from "react";
import  ReactDOM  from "react-dom/client";

//React element
const heading = (
    <div>
        <h1 id="title2" key="title2">Namaste React</h1>
    </div>
)

//Functional component 
const HeaderComponent = () => {
    return (
        <div>
            {heading}
            <h2>Hello</h2>
            <h3>Pramod</h3>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);