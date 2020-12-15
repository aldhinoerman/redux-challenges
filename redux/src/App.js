import React, { Component } from 'react';
import HelloWorld from './components/helloworld';
import ButtonGroup from './components/buttongroup';
import store from './components/store';

class App extends Component {
  render() {
    return [
      <HelloWorld key={1} technology={store.getState().technology} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

export default App;