import React, { Component, createRef } from 'react';
import Title from './components/Title';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
  },
  {
    id: '4',
    text: 'Use Context API',
    isCompleted: false
  },
  {
    id: '5',
    text: 'Use React Hooks',
    isCompleted: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = { todos };
    this.idRef = createRef();
    this.idRef.current = 6;
  }

  count(todos) {
    return todos.reduce((a, c) => a + (c.isCompleted ? 0 : 1), 0);
  }

  // Add todo handler
  handleAdd = text => {
    if (text.length === 0) return;

    const id = '' + this.idRef.current++;

    // Assemble data
    const todo = {
      id,
      text,
      isCompleted: false
    };
    // Clone & Update data
    const todos = [...this.state.todos, todo];
    // Update state
    this.setState({ todos });
  };

  // Handle remove
  handleRemove = id => {
    // Filter all todos except the one to be removed
    const remainder = this.state.todos.filter(todo => todo.id !== id);
    // Update state with filter
    this.setState({ todos: remainder });
  };

  // Handle toggle complete
  handleToggleComplete = id => {
    // Clone
    const todos = [...this.state.todos];

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    // Update state
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos } = this.state;
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
      </div>
    );
  }
}

export default App;
