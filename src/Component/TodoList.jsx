import React, { useState} from "react";
  
 const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);

     const handleTodo = () => {
        if (!inputValue.trim()) return;
        const updatedTodos = editIndex !== null 
            ? todos.map((todo, index) => (index === editIndex ? inputValue : todo)) 
            : [...todos, inputValue];

            setTodos(updatedTodos);
            setInputValue(' ');
            setEditIndex(null);

     } ;

     return(
        <>
          <h1>This is a To-Do App.</h1>
          < input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
           <button onClick={handleTodo} >
            {editIndex !== null ? 'Update' : 'Add'}
           </button>  

           <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} 
                        <button onClick={() => { setInputValue(todo); setEditIndex(index); }}>Edit</button>
                        <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>Remove</button>
                    </li>
                ))}
           </ul>
        </>
     );

}
export default Todo;