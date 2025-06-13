//import React from "react";
interface GreetingProps{
    name: string;
    timeOfDay: string;
}

function Greeting(props){
    return(
        <h1>Good{props.timeOfDay}, {props.name}!</h1>
    );
}

export default Greeting;

