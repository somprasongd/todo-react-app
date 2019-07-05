import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { AppContext } from '../../context';

const TodoList = () => {
  const { todos } = useContext(AppContext);
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
};

export default TodoList;
