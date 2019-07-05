import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  // Similar to componentDidMount and componentWillUnmount
  useEffect(() => {
    console.log('mounted');
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      console.log('unMount');
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h2>Time is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default Clock;
