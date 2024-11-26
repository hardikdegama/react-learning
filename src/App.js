import React from 'react';
import { AuthProvider } from './AllHooks/useContextexample';
import Login from './AllHooks/useContextexample'; 

const App = () => {
    return (
        <AuthProvider>
            <h1>Login Page</h1>
            <Login />
        </AuthProvider>
    );
};

export default App;