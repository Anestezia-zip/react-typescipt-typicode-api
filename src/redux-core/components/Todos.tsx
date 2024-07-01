import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../actions/dataActions.ts';
import { AppDispatch, AppStateType } from '../storage';
import { Todo } from '../../interfaces/interfaces.ts';
import "../../App.css";

const Todos = () => {
  const [todo, setTodo] = useState(true)
    const dispatch: AppDispatch = useDispatch();
    const todos: Todo[] = useSelector((state: AppStateType) => state.data.todos);
    

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/todos')
                dispatch(dataActions.setTodos(res.data.todos));
            } catch (error) {
                console.error(error)
            }
        }
        getTodos()
    }, [])

    const toggleTodoCompletion = (id: number) => {
      dispatch(dataActions.toggleTodoCompletion(id))
    }

  return (
    <div>
      <h2 style={{marginLeft: '20px'}}>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li className='todo' key={todo.id}>
            <p>{todo.todo}</p>
            <span style={{color: todo.completed ? "green" : "red"}} className='todoCompleted' onClick={() => toggleTodoCompletion(todo.id)}>{todo.completed ? "✓" : "✗"}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos