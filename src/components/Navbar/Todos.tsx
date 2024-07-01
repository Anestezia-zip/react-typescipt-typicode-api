import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../../interfaces/interfaces';

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const getTodos = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setTodos(res.data)
        }
        getTodos()
    }, [])

  return (
    <div style={{backgroundColor: 'lightgoldenrodyellow'}}>
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos