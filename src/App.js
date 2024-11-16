
import React   from 'react';
import ParentComponent from './Component/ParentComponent';
import Todo from './Component/TodoList';
import { AuthProvider, AuthStatus } from './Component/SimpleContax';

function App() {
  return (
      <>
       <ParentComponent />    
       <Todo />
       <AuthProvider>
      <AuthStatus/>
    </AuthProvider>
      </>
  );
}

export default App;
