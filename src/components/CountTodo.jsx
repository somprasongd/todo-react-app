import React from 'react';
import { Consumer } from '../context';

const CountTodo = () => {
  return (
    <Consumer>
      {value => {
        const { todos } = value;
        const count = todos.reduce((a, c) => a + (c.isCompleted ? 0 : 1), 0);
        return <>{count}</>;
      }}
    </Consumer>
  );
};

export default CountTodo;
