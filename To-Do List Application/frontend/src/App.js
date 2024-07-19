import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        axios.get('/api/todos')
            .then(response => {
                setTodos(response.data);
            });
    }, []);

    const addTodo = () => {
        axios.post('/api/todos', { text: input })
            .then(response => {
                setTodos([...todos, response.data]);
                setInput('');
            });
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
