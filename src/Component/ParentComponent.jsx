import React from 'react';
import ChildComponent from './ChildComponent';
const ParentComponent = () => {
    const Username = "ABC";
    const Userex = 7 ;
    return (
        <>
           <h1> Welcom </h1>
           <ChildComponent name={Username} ex={Userex} />

        </>
    );
};

export default ParentComponent;