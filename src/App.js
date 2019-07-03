import React, { Component } from 'react';
import axios from 'axios';
import Title from './components/Title';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Clock from './components/Clock';
class App extends Component {
  constructor() {
    super();
    // Set initial state
    this.state = { todos: [], isShowTime: false };
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

  count(todos) {
    return todos.reduce((a, c) => a + (c.isCompleted ? 0 : 1), 0);
  }

  // Add todo handler
  handleAdd = text => {
    if (text.length === 0) return;

    // Assemble data
    const todo = {
      text,
      isCompleted: false
    };

    // Update state
    axios.post(this.apiUrl, todo).then(res => {
      // Clone & Update data
      const todos = [...this.state.todos];
      todos.push(res.data);

      this.setState({ todos });
    });
  };

  // Handle remove
  handleRemove = id => {
    // Filter all todos except the one to be removed
    const remainder = this.state.todos.filter(todo => todo.id !== id);
    // Update state with filter
    axios.delete(`${this.apiUrl}/${id}`).then(res => {
      this.setState({ todos: remainder });
    });
  };

  // Handle toggle complete
  handleToggleComplete = id => {
    // Clone
    const todos = [...this.state.todos];

    const todo = todos.find(todo => todo.id === id);

    todo.isCompleted = !todo.isCompleted;

    // Update data
    axios.put(`${this.apiUrl}/${id}`, todo).then(res => {
      this.setState({ todos });
    });
  };

  render() {
    const { todos, isShowTime } = this.state;
    const countUncompleted = this.count(todos);
    return (
      <div className="container mt-5">
        <Title count={countUncompleted} />
        <TodoForm onAdd={this.handleAdd} />
        <TodoList
          todos={todos}
          onToggle={this.handleToggleComplete}
          onDelete={this.handleRemove}
        />
        <div className="m-2">
          {isShowTime && <Clock />}
          <button
            className="btn btn-info"
            onClick={e => this.setState({ isShowTime: !isShowTime })}
          >
            {isShowTime ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
