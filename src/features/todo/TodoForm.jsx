import React from 'react';

function TodoForm({ onAdd }) {
  // Input tracker
  let textInput;

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(textInput.value);
    // Clear input value
    textInput.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row align-items-center">
        <div className="col">
          <label className="sr-only" htmlFor="inlineFormInput">
            Task
          </label>
          <input
            type="text"
            ref={node => (textInput = node)}
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

export default TodoForm;
