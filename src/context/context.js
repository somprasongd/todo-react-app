import React, { Component, createContext } from 'react';
import axios from 'axios';
import config from '../config';
import reducer from './reducer';

const AppContext = createContext({});

export default class Provider extends Component {
  state = {
    todos: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // Lifecycle method
  async componentDidMount() {
    // Make HTTP reques with Axios
    const res = await axios.get(config.apiUrl);
    // Set state with result
    this.setState({ todos: res.data });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const Consumer = AppContext.Consumer;