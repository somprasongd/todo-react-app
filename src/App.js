import React from 'react';
import Header from './components/Header';
import { Provider } from './context';

const App = props => {
  return (
    <Provider>
      <Header />
      <main className="container mt-3">{props.children}</main>
    </Provider>
  );
};

export default App;
