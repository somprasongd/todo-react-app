import React, { Component } from 'react';
import Header from './components/Header';
import { Provider } from './context';

class App extends Component {
  state = {
    todos: []
  };
  render() {
    return (
      <Provider>
        <Header />
        <main className="container mt-3">{this.props.children}</main>
      </Provider>
    );
  }
}

export default App;
