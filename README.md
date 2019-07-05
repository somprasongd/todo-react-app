# Hooks

จากเดิมถ้าต้องการใช้งาน state กับ components lifecycles จะต้องสร้างเป็น class component เท่านั้น แต่ตอนนี้สามารถใช้ Hooks มาแก้ปัญหาดังกล่าวได้ใน function components แล้ว

## กฎการใช้ Hooks

1. ต้องเรียกใช้ Hooks ที่ top level เท่านั้น ห้ามเรียกใน loops, conditions หรือ nested functions
2. ต้องเรียกใช้ Hooks ใน React function components เท่านั้น

### eslint-plugin-react-hooks

eslint-plugin-react-hooks เป็น plugin ที่ช่วยตรวจสอบการเขียนของเราว่าทำตามกฏหรือไม่

- ติดตั้ง `npm i eslint-plugin-react-hooks`
- ตั้งค่า ESLint

```json
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## useState

โดยปกติเราจะสามารถใช้ state ได้เฉพาะใน Class Components เท่านั้น

```jsx
import React, { Component } from 'react';

export default class Counter extends Component {
  state = { count: 0 };

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

ถ้าต้องการจะใช้ state ใน function components ทำได้โดยใช้ `useState`

```jsx
import React, { useState } from 'react';

const Counter = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
```

- useState(initValue) ต้องมีการกำหนดค่าเริ่มต้น
- useState() จะ return เป็น array 2 elements คือ ชื่อตัวแปร และฟังก์ชันสำหรับการเปลี่ยนแปลงค่าตามลำดับ (จะตั้งชื่อยังไงก็ได้)
- ถ้ามีตัวแปร state ทำได้โดย

```jsx
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

## useEffect

ปกติถ้าต้องการใช้ components lifecycle จะต้องใช้ใน Class Components เท่านั้น แต่เราสามารถใช้ `useEffact`

```jsx
import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
```

- ถ้าใช้ `useEffect(()=>{})` มันจะทำงานหลัง render ครั้งแรก และทุกครั้งที่ค่าของ state เปลี่ยน

- ถ้าต้องการให้ทำงานแค่ครั้งแรกครั้งเดียวต้อง เพิ่ม `[]` เพิ่มนี้ `useEffect(()=>{}, [])`

```jsx
import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar to componentDidMount
  useEffect(() => {
    setTimeout(() => {
      setCount(10);
    }, 2000);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
```

- ถ้ามี state หลายตัวแล้ว ต้องการใช้ useEffect แค่กับ state บางตัวเท่านั้น ให้กำหนดลงไปใน `[]` ซึ่ง `[]` หมายถึงบอกว่าต้องการให้ทำงานขึ้นอยู่กับ dependencies กับ state ตัวใดบ้าง

```jsx
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
  }, [count]); // ถ้าไม่ระบุ จะเรียก 2 ครั้ง setCount, setIsLoading

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
```

- ใช้สำหรับ subscribe และ unsubscribe ให้ `return () => {}` ออกไป

```jsx
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
```

## Custom Hooks

เราสามารถสร้าง custom hooks ใช้เองได้ เช่น การโหลดข้อมูลจาก api

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useHTTP = url => {
  const [response, setResponse] = React.useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fn = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fn();
  }, [url]);
  return { isLoading, response, error };
};

export default useHTTP;
```

## [useReducer](https://github.com/somprasongd/todo-react-app/tree/8-hooks-1-usereducer)

## [useContext](https://github.com/somprasongd/todo-react-app/tree/8-hooks-1-usecontext)

**เรื่องถัดไป** [Deployment](https://github.com/somprasongd/todo-react-app/tree/9-deploy)

**เรื่องก่อนหน้า** [Context API](https://github.com/somprasongd/todo-react-app/tree/7-context)

**[หน้าแรก](https://github.com/somprasongd/todo-react-app)**
