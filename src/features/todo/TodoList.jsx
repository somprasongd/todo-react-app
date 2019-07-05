import React from 'react';
import TodoItem from './TodoItem';
import { Consumer } from '../../context';

const TodoList = () => {
  return (
    <Consumer>
      {value => {
        const { todos } = value;
        return (
          <>
            {todos.length === 0 ? (
              <p className="text-center">No task.</p>
            ) : (
              <ul className="list-group">
                {todos.map(todo => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </ul>
            )}
          </>
        );
      }}
    </Consumer>
  );
};

export default TodoList;
