import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Provider } from 'react-redux'
import Home from './Src/Home'
import store  from "./Src/Store/index";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       <Provider store={store}>
    
        <Home />
       
        </Provider>
    );
  }
}

export default App;
