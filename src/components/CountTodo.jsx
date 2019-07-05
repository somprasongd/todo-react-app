import React, { useContext } from 'react';
import { AppContext } from '../context';

const CountTodo = () => {
  const { todos } = useContext(AppContext);

  const count = todos.reduce((a, c) => a + (c.isCompleted ? 0 : 1), 0);
  return <>{count}</>;
};

export default CountTodo;
