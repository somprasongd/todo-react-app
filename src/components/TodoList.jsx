import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  const { todos, onToggle, onDelete } = props;
  return (
    <>
      {todos.length === 0 ? (
        <p className="text-center">No task.</p>
      ) : (
        <ul className="list-group">
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
