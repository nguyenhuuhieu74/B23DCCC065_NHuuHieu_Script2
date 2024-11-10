import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/todos')
            .then(response => {
                setTodos(response.data);
            });
    }, [todos]);

    const markComplete = (id) => {
        axios.put(`http://localhost:5000/api/todos/${id}/complete`)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)));
    };

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? 'Completed' : 'Not completed'}
                        <input 
                            type="radio" 
                            checked={todo.completed} 
                            onChange={() => markComplete(todo.id)} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
