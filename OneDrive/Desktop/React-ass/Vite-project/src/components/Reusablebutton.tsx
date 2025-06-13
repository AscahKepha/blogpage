//import React from 'react';

function CustomButton(props){
    return (
        <button onClick={props.onClick}>
        {props.label}
        </button>
    );
}

export default CustomButton;
