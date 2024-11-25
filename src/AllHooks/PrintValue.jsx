import React, { useState, useCallback } from "react";

function  PrintValue () {
  const [text, setText] = useState("");

  const printText = useCallback((event) => {
    setText(event.target.value);
  }, []);

  return (
    <div>
      <h1> This is a useCallback  Example.</h1>
      <input type="text" value={text} onChange={printText} />
      <p> Your Typed Text Is : {text}</p>
    </div>
  );
}

export default PrintValue;
