import React from "react";
import PropTypes from 'prop-types';

interface GreetingWithTypeCheck {
    name:string;
    timeOfDay?:string; //? makes it optional
}

function GreetingWithTypeCheck(props) {
    return(
        <h1>Good {props.timeOfDay},{props.name}!</h1>
    );
}

export default GreetingWithTypeCheck;


