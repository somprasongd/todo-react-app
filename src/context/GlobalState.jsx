import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import reducer from './reducer';
import { SET_TODO } from './actionTypes';
import AppContext from './context';

const Provider = props => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  useEffect(() => {
    const fn = async () => {
      const res = await axios.get(config.apiUrl);
      dispatch({
        type: SET_TODO,
        payload: res.data
      });
    };
    fn();
  }, [dispatch]);

  return (
    <AppContext.Provider value={{ todos: state.todos, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Provider;
