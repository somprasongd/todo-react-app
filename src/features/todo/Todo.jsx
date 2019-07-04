import React, { Component, Fragment } from 'react';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Clock from '../../components/Clock';
import { Consumer } from '../../context';
import { TOGGLE_TIME } from '../../context/actionTypes';
export default class Todo extends Component {
  count(todos) {
    return todos.reduce((a, c) => a + (c.isCompleted ? 0 : 1), 0);
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { todos, isShowTime, dispatch } = value;
          const countUncompleted = this.count(todos);
          return (
            <Fragment>
              <Title count={countUncompleted} />
              <TodoForm />
              <TodoList todos={todos} />
              <div className="m-2">
                {isShowTime && <Clock />}
                <button
                  className="btn btn-info"
                  onClick={e => dispatch({ type: TOGGLE_TIME })}
                >
                  {isShowTime ? 'Hide' : 'Show'}
                </button>
              </div>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}
