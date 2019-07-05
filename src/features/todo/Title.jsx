import React from 'react';
import CountTodo from '../../components/CountTodo';

function Title() {
  return (
    <h1 className="display-5 mb-2">
      Todo{' '}
      <span className="text-info">
        (<CountTodo />)
      </span>
    </h1>
  );
}

export default Title;
