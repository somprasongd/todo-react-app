import React, { useContext, useState } from 'react';
import axios from 'axios';
import config from '../../config';
import { AppContext } from '../../context';
import { ADD_TODO } from '../../context/actionTypes';

const TodoForm = () => {
  const { dispatch } = useContext(AppContext);

  const [value, setValue] = useState('');

  const handleSubmit = async (e, dispatch) => {
    e.preventDefault();

    const text = value;
    if (text.length === 0) return;

    // Assemble data
    const todo = {
      text,
      isCompleted: false
    };

    // Update state
    const res = await axios.post(config.apiUrl, todo);
    dispatch({ type: ADD_TODO, payload: res.data });

    // Clear input value
    setValue('');
  };

  return (
    <form onSubmit={e => handleSubmit(e, dispatch)}>
      <div className="form-row align-items-center">
        <div className="col">
          <label className="sr-only" htmlFor="inlineFormInput">
            Task
          </label>
          <input
            type="text"
            onChange={e => setValue(e.target.value)}
            value={value}
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
};

export default TodoForm;
