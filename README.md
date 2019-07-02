# JSX

```jsx
const element = <h1>Hello, world!</h1>;

ReactDOM.render(element, document.getElementById('root'));
```

**JSX syntax** จะดูเหมือน HTML โดยสามารถเอา HTML มาใช้ได้เลย แต่จะ มี attribute HTML บางตัวได้ที่ไม่สามารถใช้ได้ เช่น `class`, `for` โดยจะต้องเปลี่ยนเป็น `className` และ `htmlFor` ตามลำดับ

```jsx
render() {
  return (
    <form>
      <div className="form-row align-items-center">
        <div className="col">
          <label className="sr-only" htmlFor="inlineFormInput">
            Task
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="inlineFormInput"
            placeholder="What needs to be done?"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    </form>
);
}
```

โดย render() สามารถ return ได้แค่ root element เดียวเท่านั้น โดยใช้ `<div></div>` หรือ `<React.Fragment></React.Fragment>` หรือ `<></>` มาครอบ

ซึ่งถ้าใช้ `<React.Fragment></React.Fragment>` หรือ `<></>` ตอนที่แสดงใน DOM จริงๆ จะไม่มี `<></>` แสดงออกมา

```jsx
render() {
  return (
    <>
      <h1>Hello world!</h1>
      <h2>From React</h2>
    </>
  );
}
```

## สามารถใส่ Javascript Expression ได้

ใน JSX สามารถใส่ตัวแปร หรือ expression ลงไปได้ เพื่อแสดงค่า หรือเรียกใช้งานฟังก์ชัน

```jsx
const name = 'Ball';
const element = <h1>Hello, {name}</h1>;

// or
const element = <h1>2 + 2 = {2 + 2}</h1>;

// or
function sum(x, y) {
  return x + y;
}

const element = <h1>2 + 2 = {sum(2, 2)}</h1>;
```

## เงื่อนไขใน JSX

การใช้เงื่อนไขเพื่อแสดงข้อมูลใน JSX สามารถทำได้หลายวิธี เช่น ใช้้ if-else หรือ Ternary Operator (`condition ? exprIfTrue : exprIfFalse`) หรือ Logical && Operator (`isTrue && <p>Show this</p>`) โดยจะเขียนแทรกลงไปใน JSX เลย หรือจะเขียนเป็นฟังก์ชันแยกไปให้คืนค่า JSX กลับมาก็ได้

```jsx
// if-else
const Hello = props => {
  const { name } = props;
  let element;

  if (name) {
    element = <h1>Hello , {name}</h1>;
  } else {
    element = <h1>No name</h1>;
  }

  return <div>{button}</div>;
};

// Ternary Operator
const Hello = props => {
  const { name } = props;

  return <div>{name ? <h1>Hello , {name}</h1> : <h1>No name</h1>}</div>;
};

// Logical && Operator
const Hello = props => {
  const { name } = props;

  return (
    <div>
      {name && <h1>Hello , {name}</h1>}
      {!name && <h1>No name</h1>}
    </div>
  );
};
```

## ลูปใน JSX

ใน JSX ถ้าต้องการวนลูปเพื่อแสดงข้อมูลแบบเดียวกันหลายๆ อัน ให้ใช้ `map()` โดยในแต่ละ element ต้องมี attribute `key` ซึ่งต้องใส่ค่า unique ด้วย

```jsx
// ตัวอย่างข้อมูล
const todos = [
  {
    id: '1',
    text: 'Learn React Basic',
    isCompleted: true
  },
  {
    id: '2',
    text: 'Use class component',
    isCompleted: false
  },
  {
    id: '3',
    text: 'make HTTP request',
    isCompleted: false
  }
];

// การวนลูปใน render
render() {
  return <div>{todos.map(todo => <p key={todo.id}>{todo.text}</p>)}</div>;
}
```

## CSS in React

- Inline style ใส่ลงไปตรงๆ หรือใส่ตัวแปรไปก็ได้ `<h1 style={object}}…></h1>` โดยถ้า HTML เป็น `font-size` ต้องเปลี่ยนเป็น `fontSize` เช่น

```jsx
render() {
  return <h1 style={{ color: 'green', fontSize: '50px' }}>CSS in React</h1>;
}

// or
render() {
  const headingStyle = { color: 'green', fontSize: '50px' };
  return <h1 style={headingStyle}>CSS in React</h1>;
}
```

- CSS file: สร้างเป็นไฟล์ .css แล้ว import './file.css'; ใน Component นั้นๆ

**เรื่องถัดไป** [Handling Events](https://github.com/somprasongd/todo-react-app/tree/2-events)

**[หน้าแรก](https://github.com/somprasongd/todo-react-app)**
