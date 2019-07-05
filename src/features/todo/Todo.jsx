import React, { Fragment, useState } from 'react';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Clock from '../../components/Clock';

const Todo = () => {
  const [isShowTime, setIsShowTime] = useState(false);

  const handleToggleShowtime = () => {
    setIsShowTime(!isShowTime);
  };

  return (
    <Fragment>
      <Title />
      <TodoForm />
      <TodoList />
      <div className="m-2">
        {isShowTime && <Clock />}
        <button className="btn btn-info" onClick={handleToggleShowtime}>
          {isShowTime ? 'Hide' : 'Show'}
        </button>
      </div>
    </Fragment>
  );
};

export default Todo;
