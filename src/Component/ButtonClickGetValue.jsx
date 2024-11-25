import React, { useRef } from 'react';

function ExampleofauseRef() {
    const inputvalue = useRef(null);
    
    function Value() {
        inputvalue.current.value = "Hello World.";
       
       inputvalue.current.focus();
       inputvalue.current.style.color = 'red'; 
        
        
    }
    
    return (
        <>
            <h1>This Is a UseRef Example.</h1>
            <input type="text" ref={inputvalue} />
            <button onClick={Value}>CLICK ME</button>
        </>
    );
}

export default ExampleofauseRef;