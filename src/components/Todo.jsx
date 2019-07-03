import React from 'react';

function Todo(props) {
  const { todo, onToggle, onDelete } = props;
  return (
    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      <div
        style={{
          textDecoration: todo.isCompleted ? 'line-through' : null
        }}
        onClick={e => onToggle(todo.id)}
      >
        {todo.text}
      </div>
      <button className="btn btn-danger" onClick={e => onDelete(todo.id)}>
        <i className="fas fa-minus-circle" />
      </button>
    </li>
  );
}

export default Todo;
