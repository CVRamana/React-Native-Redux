import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TodoApp from './src/TodoApp'
import {Provider } from 'react-redux'
import {store} from './src/store/index'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        
        <Provider store={store}>
        <TodoApp/>
        </Provider>
      </View>
    );
  }
}

export default App;
