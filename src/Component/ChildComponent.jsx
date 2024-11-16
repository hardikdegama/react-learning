import React from "react";
  
const ChildComponent = (props) => {
    return(
        <>
          <h1> Heloo , {props.name} </h1>
          <p> Your Exprience Time is  a  {props.ex} Years.  </p>
        </>
    );
};

export default ChildComponent;