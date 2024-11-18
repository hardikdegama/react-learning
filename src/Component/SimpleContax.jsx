import React, { useState, useContext } from 'react';


const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthStatus = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>{isAuthenticated ? 'You are logged in!' : 'You are logged out!'}</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};
export { AuthProvider, AuthStatus };