import React, { Component } from 'react';

class Clock extends Component {
  state = { date: new Date() };

  componentDidMount() {
    console.log('componentDidMount');

    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    console.log('tick');

    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('render');
    return (
      <div>
        <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
