import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CounterApp from './src/CounterApp'
import { Provider } from 'react-redux'
import { createStore } from "redux";

const initialState = {
  counter: 0,
  tasks: [],
 //  input:''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {
        counter: state.counter + 1
      }
    case 'DECREASE_COUNTER':
      return {
        counter: state.counter - 1
      }
    case 'ADD_TASK':
      return {
        tasks: state.tasks + action.data
      }


  }
  return state
}

const store = createStore(reducer)
class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View>
        <Provider store={store}>
          <CounterApp />
        </Provider>
      </View>
    );
  }
}

export default App;
