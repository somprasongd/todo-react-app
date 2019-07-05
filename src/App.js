import React, { Component } from 'react';
import Header from './components/Header';
import { GlobalState } from './context';

class App extends Component {
  render() {
    return (
      <GlobalState>
        <Header />
        <main className="container mt-3">{this.props.children}</main>
      </GlobalState>
    );
  }
}

export default App;
