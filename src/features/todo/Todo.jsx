import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Clock from '../../components/Clock';

const apiUrl = 'https://5d1ac8b7dd81710014e87e54.mockapi.io/api/todos';
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isShowTime, setIsShowTime] = useState(false);

  useEffect(() => {
    axios.get(apiUrl).then(res => {
      // Set state with result
      setTodos(res.data);
    });
  }, [setTodos]);

  const count = todos => {
    return todos.reduce((a, c) => a + (c.isCompleted ? 0 : 1), 0);
  };

  // Add todo handler
  const handleAdd = text => {
    if (text.length === 0) return;

    // Assemble data
    const todo = {
      text,
      isCompleted: false
    };

    // Update state
    axios.post(apiUrl, todo).then(res => {
      // Clone & Update data
      const newTodos = [...todos];
      newTodos.push(res.data);

      setTodos(newTodos);
    });
  };

  // Handle remove
  const handleRemove = id => {
    // Filter all todos except the one to be removed
    const remainder = todos.filter(todo => todo.id !== id);
    // Update state with filter
    axios.delete(`${apiUrl}/${id}`).then(res => {
      setTodos(remainder);
    });
  };

  // Handle toggle complete
  const handleToggleComplete = id => {
    // Clone
    const updateTodos = [...todos];
    console.log(id, updateTodos);

    const todo = updateTodos.find(todo => todo.id === id);
    console.log(todo);

    todo.isCompleted = !todo.isCompleted;

    // Update data
    axios.put(`${apiUrl}/${id}`, todo).then(res => {
      setTodos(updateTodos);
    });
  };

  const countUncompleted = count(todos);
  return (
    <Fragment>
      <Title count={countUncompleted} />
      <TodoForm onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggleComplete}
        onDelete={handleRemove}
      />
      <div className="m-2">
        {isShowTime && <Clock />}
        <button
          className="btn btn-info"
          onClick={e => setIsShowTime(!isShowTime)}
        >
          {isShowTime ? 'Hide' : 'Show'}
        </button>
      </div>
    </Fragment>
  );
};

export default Todo;
