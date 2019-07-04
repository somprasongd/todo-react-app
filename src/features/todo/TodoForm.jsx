import React from 'react';
import axios from 'axios';
import config from '../../config';
import { Consumer } from '../../context';
import { ADD_TODO } from '../../context/actionTypes';

function TodoForm() {
  // Input tracker
  let textInput;

  const handleSubmit = (e, dispatch) => {
    e.preventDefault();

    const text = textInput.value;
    if (text.length === 0) return;

    // Assemble data
    const todo = {
      text,
      isCompleted: false
    };

    // Update state
    axios.post(config.apiUrl, todo).then(res => {
      dispatch({ type: ADD_TODO, payload: res.data });
    });
    // Clear input value
    textInput.value = '';
  };

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <form onSubmit={e => handleSubmit(e, dispatch)}>
            <div className="form-row align-items-center">
              <div className="col">
                <label className="sr-only" htmlFor="inlineFormInput">
                  Task
                </label>
                <input
                  type="text"
                  ref={node => (textInput = node)}
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="What needs to be done?"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>
          </form>
        );
      }}
    </Consumer>
  );
}

export default TodoForm;
