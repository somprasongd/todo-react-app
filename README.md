# Components and Props

React มี components 2 แบบ คือ Class Components กับ Function Components ต่างกันคือ

- **Class Components:** จะมี state และ life cycle

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- **Function Components:** จะไม่มี state และ life cycle โดยตัวมันจะ return jsx element เพื่อ render เท่านั้น ซึ่งถ้าต้องการส่งค่าไปให้ function component ไว้ render ต้องส่งกับ props เท่านั้น ที่สำคัญ **props นั้น read only!!!**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Composing Components

Components 1 ตัว สามารถอ้างถึง components อื่นๆ ได้ เพื่อเอามา render ในตัวมันเอง เช่น

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**เรื่องถัดไป** [Life Cycle](https://github.com/somprasongd/todo-react-app/tree/4-lifecycle)

**เรื่องก่อนหน้า** [JSX](https://github.com/somprasongd/todo-react-app/tree/2-events)

**[หน้าแรก](https://github.com/somprasongd/todo-react-app)**
