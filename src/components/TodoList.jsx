import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos, onToggle, onDelete } = props;
  return (
    <>
      {todos.length === 0 ? (
        <p className="text-center">No task.</p>
      ) : (
        <ul className="list-group">
          {todos.map(todo => (
            <TodoItem
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
