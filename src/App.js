import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container mt-3">{this.props.children}</main>
      </>
    );
  }
}

export default App;
