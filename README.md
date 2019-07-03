# HTTP Requests

เนื่องจาก React เป็นแค่ library สำหรับจัดการ UI เท่านั้น ดังนั้นการที่จะทำ HTTP request นั้น จำเป็นต้องใช้ library อื่นมาช่วย โดยในที่นี่จะใช้ [Axios](https://github.com/axios/axios)

## การติดตั้ง

- ผ่าน npm

```bash
$ npm install axios
```

- หรือจะใช้ CDN ใส่ไว้ในไฟล์ public/index.html ก็ได้

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## การใช้งาน

### กำหนดค่าเริ่มต้น

ต้องใช้ร่วมกับ Lifecycle method ชื่อ `componentDidMount`

```jsx
class TodoApp extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      todos: []
    };
    this.apiUrl = 'https://5d1ac8b7dd81710014e87e54.mockapi.io/api/todos';
  }
  // Lifecycle method
  componentDidMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      this.setState({ todos: res.data });
    });
  }
}
```

### การเพิ่มข้อมูลใหม่

```jsx
// Add todo handler
addTodo(val){
  // Assemble data
  const todo = {text: val, isCompleted: false}
  // Update data
  axios.post(this.apiUrl, todo)
      .then((res) => {
        const todos = [... this.state.todos];
        todos.push(res.data);
        this.setState({todos});
      });
}
```

### การแก้ไข

```jsx
// Update todo handler
updateTodo(id){
  // Clone
  const todos = [...this.state.todos];

  const todo = todos.find(todo => todo.id = id);

  todo.isCompleted = !todo.isCompleted;

  // Update data
  axios.put(`${this.apiUrl}/${id}`, todo)
      .then((res) => {
        this.setState({todos});
      });
}
```

### การลบ

```jsx
// Delete todo handler
deleteTodo(id){
  // Filter all todos except the one to be removed
  const remainder = this.state.todos.filter(todo => todo.id !== id);
  // Update state with filter
  axios.delete(`${this.apiUrl}/${id}`)
      .then((res) => {
        this.setState({ todos: remainder });
      });
}
```

**เรื่องถัดไป** [Router](https://github.com/somprasongd/todo-react-app/tree/6-router)

**เรื่องก่อนหน้า** [Component Lifecycle](https://github.com/somprasongd/todo-react-app/tree/4-lifecycle)

**[หน้าแรก](https://github.com/somprasongd/todo-react-app)**
