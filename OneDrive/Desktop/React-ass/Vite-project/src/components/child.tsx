//import React from "react";
interface ChildComponentprops{
    message:string;
}

function ChildComponent(props: ChildComponentprops){
    return(
        <p>Message from parent:{props.message}</p>
    );
}
export default ChildComponent;
