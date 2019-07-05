import React from 'react';
import axios from 'axios';
import config from '../../config';
import { Consumer } from '../../context';
import { DELETE_TODO, UPDATE_TODO } from '../../context/actionTypes';

const TodoItem = props => {
  const { todo } = props;

  // Handle remove
  const handleRemove = async (dispatch, id) => {
    await axios.delete(`${config.apiUrl}/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  };

  // Handle toggle complete
  const handleToggleComplete = async (dispatch, todo) => {
    todo.isCompleted = !todo.isCompleted;

    // Update data
    await axios.put(`${config.apiUrl}/${todo.id}`, todo);
    dispatch({
      type: UPDATE_TODO,
      payload: todo
    });
  };

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : null
              }}
              onClick={e => handleToggleComplete(dispatch, todo)}
            >
              {todo.text}
            </div>
            <button
              className="btn btn-danger"
              onClick={e => handleRemove(dispatch, todo.id)}
            >
              <i className="fas fa-minus-circle" />
            </button>
          </li>
        );
      }}
    </Consumer>
  );
};

export default TodoItem;
