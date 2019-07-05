import React, { Fragment, useEffect, useReducer } from 'react';
import axios from 'axios';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Clock from '../../components/Clock';

const apiUrl = 'https://5d1ac8b7dd81710014e87e54.mockapi.io/api/todos';

const SET_TODO = 'SET_TODO';
const ADD_TODO = 'ADD_TODO';
const DELELE_TODO = 'DELELE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const TOGGLE_TIME = 'TOGGLE_TIME';

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELELE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? (todo = action.payload) : todo
        )
      };
    case TOGGLE_TIME:
      return { ...state, isShowTime: !state.isShowTime };
    default:
      return state;
  }
}
const Todo = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    isShowTime: false
  });

  useEffect(() => {
    axios.get(apiUrl).then(res => {
      dispatch({
        type: SET_TODO,
        payload: res.data
      });
    });
  }, [dispatch]);

  // Add todo handler
  const handleAdd = text => {
    if (text.length === 0) return;

    // Assemble data
    const todo = {
      text,
      isCompleted: false
    };

    // Update state
    axios.post(apiUrl, todo).then(res => {
      dispatch({
        type: ADD_TODO,
        payload: res.data
      });
    });
  };

  // Handle remove
  const handleRemove = id => {
    // Update state with filter
    axios.delete(`${apiUrl}/${id}`).then(res => {
      dispatch({
        type: DELELE_TODO,
        payload: id
      });
    });
  };

  // Handle toggle complete
  const handleToggleComplete = todo => {
    todo.isCompleted = !todo.isCompleted;

    // Update data
    axios.put(`${apiUrl}/${todo.id}`, todo).then(res => {
      dispatch({
        type: UPDATE_TODO,
        payload: todo
      });
    });
  };

  const countUncompleted = state.todos.reduce(
    (a, c) => a + (c.isCompleted ? 0 : 1),
    0
  );
  return (
    <Fragment>
      <Title count={countUncompleted} />
      <TodoForm onAdd={handleAdd} />
      <TodoList
        todos={state.todos}
        onToggle={handleToggleComplete}
        onDelete={handleRemove}
      />
      <div className="m-2">
        {state.isShowTime && <Clock />}
        <button
          className="btn btn-info"
          onClick={e =>
            dispatch({
              type: TOGGLE_TIME
            })
          }
        >
          {state.isShowTime ? 'Hide' : 'Show'}
        </button>
      </div>
    </Fragment>
  );
};

export default Todo;
