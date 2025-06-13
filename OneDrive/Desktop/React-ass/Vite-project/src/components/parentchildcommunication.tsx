//import React from "react";
import ChildComponent from "./child";

function ParentComponent(){
    const myMessage = "Hello from parent!";
    return(
        <div>
            <h2>Thisis a parent component</h2>
            <ChildComponent message={myMessage} />
            <p>This message is displayed by childComponent</p>
        </div>
    );
}
export default ParentComponent;