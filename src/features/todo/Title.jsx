import React from 'react';

function Title({ count }) {
  return (
    <h1 className="display-5 mb-2">
      Todo <span className="text-info">({count})</span>
    </h1>
  );
}

export default Title;
