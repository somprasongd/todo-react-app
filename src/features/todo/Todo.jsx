import React, { Component, Fragment } from 'react';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Clock from '../../components/Clock';
export default class Todo extends Component {
  state = {
    isShowTime: false
  };
  handleToggleShowtime = () => {
    this.setState({ isShowTime: !this.state.isShowTime });
  };

  render() {
    const { isShowTime } = this.state;
    return (
      <Fragment>
        <Title />
        <TodoForm />
        <TodoList />
        <div className="m-2">
          {isShowTime && <Clock />}
          <button className="btn btn-info" onClick={this.handleToggleShowtime}>
            {isShowTime ? 'Hide' : 'Show'}
          </button>
        </div>
      </Fragment>
    );
  }
}
