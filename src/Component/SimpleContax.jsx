// src/Simple.jsx
import React, { useState, useContext } from 'react';

// Create a context
const AuthContext = React.createContext();

// Create a provider component
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

// Create a component that consumes the context
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

// Export the provider and the consumer component
export { AuthProvider, AuthStatus };