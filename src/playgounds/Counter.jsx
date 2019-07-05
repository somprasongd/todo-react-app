import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Similar to componentDidMount
  useEffect(() => {
    setTimeout(() => {
      setCount(10);
      setIsLoading(false);
    }, 2000);
  }, []);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button disabled={isLoading} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
