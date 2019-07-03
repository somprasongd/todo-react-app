import React, { Component, createRef } from 'react';

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
    this.textInput = createRef();
    this.idRef = createRef();
    this.idRef.current = 6;
  }

  count(todos) {
    return todos.reduce((a, c) => a + (c.isCompleted ? 0 : 1), 0);
  }

  // Add todo handler
  handleAdd = e => {
    e.preventDefault();

    const text = this.textInput.current.value;
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
    // Clear input value
    this.textInput.current.value = '';
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
        <div>
          <h1>Todo ({countUncompleted})</h1>
        </div>
        <form onSubmit={this.handleAdd}>
          <div className="form-row align-items-center">
            <div className="col">
              <label className="sr-only" htmlFor="inlineFormInput">
                Task
              </label>
              <input
                type="text"
                ref={this.textInput}
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
        {todos.length === 0 ? (
          <p className="text-center">No task.</p>
        ) : (
          <ul className="list-group">
            {todos.map(todo => (
              <li
                key={todo.id}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <div
                  style={{
                    textDecoration: todo.isCompleted ? 'line-through' : null
                  }}
                  onClick={e => this.handleToggleComplete(todo.id)}
                >
                  {todo.text}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={e => this.handleRemove(todo.id)}
                >
                  <i className="fas fa-minus-circle" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
