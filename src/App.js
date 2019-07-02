import React, { Component, Fragment, createRef } from 'react';

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
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  render() {
    return (
      <Fragment>
        <div className="container mt-5">
          <div>
            <h1>
              Todo ({todos.reduce((a, c) => a + (c.isCompleted ? 0 : 1), 0)})
            </h1>
          </div>
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
          {todos.length === 0 ? (
            <p class="text-center">No task.</p>
          ) : (
            <ul className="list-group">
              {todos.map(todo => (
                <li
                  key={todo.id}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  style={{
                    textDecoration: todo.isCompleted ? 'line-through' : null
                  }}
                >
                  {todo.text}
                  <button className="btn btn-danger">
                    <i className="fas fa-minus-circle" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Fragment>
    );
  }
}

export default App;
