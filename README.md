# State & Handling Events

## State

ก่อนอื่นต้องทำความรู้จักกับ state ก่อน ซึ่ง state ก็คือตัวที่เก็บค่า state ภายใน **class component** นั้น ซึ่งถ้าค่าของ state เปลี่ยน React ก็จะทำการ render หน้าใหม่ทั้งหมด แต่ React จะทำอยู่ใน Virtual DOM(ใน memory) ก่อน และจะเอาส่วนที่เปลี่ยนแปลงเท่านั้นไปอัพเดทใน HTML DOM อีกทีหนึ่ง

### วิธีการสร้าง state

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // กำหนดค่าเริ่มต้น
  }
}

// or

class Counter extends Component {
  state = { count: 0 }; // กำหนดค่าเริ่มต้น
}
```

### การอัพเดทค่าใน state

แต่ state ไม่สามารถเปลี่ยนแปลงค่าได้ตรงๆ ต้องทำผ่าน `setState()`

```js
increment() {
  this.setState({
    count: (this.state.count += 1)
  });
}
```

แต่ต้องระวังเพราะ setState เป็น asynchronous ถ้าต้องการอัพเดทค่าใหม่โดยใช้ค่าเดิมด้วย ต้องป้องกันปัญหานี้ได้โดย

```js
increment() {
  this.setState((previousState, currentProps) => {
    return {
      count: (previousState.count + 1)
    }
  });
}
```

## Handling Events

คล้ายกับการจัดการ event ของ DOM elements เพียงแค่เปลี่ยนชื่อเป็น camel case เช่น

```js
// HTML
<button onclick="increment()">+</button>

// JSX
<button onClick={this.increment}>+</button>
```

### วิธีการสร้างฟังก์ชันจัดการ event

ถ้าสร้างฟังก์ชันแบบปกติใน class จะไม่สามารถเรียกใช้งาน this ได้ เช่น

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState({
      count: (this.state.count += 1)
    });
  }
  decrement() {
    this.setState({
      count: (this.state.count -= 1)
    });
  }
  render() {
    return (
      <>
        <h2>{this.state.count}</h2>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </>
    );
  }
}
```

แบบนี้จะไม่สามารถเรียกใช้ `this.state` ได้ ต้องทำแบบนี้

1.ใช้ `bind()` ใน render

```jsx
class Counter extends React.Component {
  ...
  render() {
    return (
      <>
        <h2>{this.state.count}</h2>
        <div>
          <button onClick={this.increment.bind(this)}>+</button>
          <button onClick={this.decrement.bind(this)}>-</button>
        </div>
      </>
    );
  }
}
```

2.ใช้ `bind()` ใน constructor

```jsx
class Counter extends React.Component {

  increment(n) {
    this.setState({
      count: (this.state.count += n)
    });
  }
  decrement(n) {
    this.setState({
      count: (this.state.count -= n)
    });
  }

  render() {
    return (
      ...
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
      ...
    );
  }
}
```

3.ใช้ Arrow function ใน render

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  ...
  render() {
    return (
      ...
          <button onClick={e => this.increment(e)}>+</button>
          <button onClick={e => this.decrement(e)}>-</button>
      ...
    );
  }
}
```

4.ใช้ Arrow function ใน Class property

```jsx
class Counter extends React.Component {
  constructor(props) {
    ...
  }
  increment = () => {
    ...
  }
  decrement = () => {
    ...
  }
  render() {
    return (
      ...
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
      ...
    );
  }
}
```

ถ้าต้องการ**ส่ง parameters** ไปให้ฟังก์ชันด้วยให้ใช้วิธีที่ **"3.ใช้ Arrow function ใน render"** เช่น

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  ...
  render() {
    return (
      ...
          <button onClick={e => this.increment(5)}>+</button>
          <button onClick={e => this.decrement(3)}>-</button>
      ...
    );
  }
}
```

## Refs

สามารถเอา Refs ไปผูกไว้กับ DOM element ได้

### การสร้าง Refs

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

### การเข้าถึง Refs

```jsx
const node = this.myRef.current;
```

### ตัวอย่างการใช้งาน

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input type="text" ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

**เรื่องถัดไป** [Components](https://github.com/somprasongd/todo-react-app/tree/3-components)

**เรื่องก่อนหน้า** [JSX](https://github.com/somprasongd/todo-react-app/tree/1-jsx)

**[หน้าแรก](https://github.com/somprasongd/todo-react-app)**
