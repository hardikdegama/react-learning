import React, { createContext, useContext } from "react";

const MyContext = createContext();

const UseContextExample = () => {
  const contextValue = "Hello, World!";

  return (
    <>
      <h1> This is a useContax example.</h1>
      <MyContext.Provider value={contextValue}>
        <PassData />
      </MyContext.Provider>
    </>
  );
};

const PassData = () => {
  const value = useContext(MyContext);
  return <>{value}</>;
};

export default UseContextExample;
