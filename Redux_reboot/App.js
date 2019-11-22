import React, { Component } from 'react';
import store  from "./src/Store/index";
import Home from './src/screen/Home';
import { Provider } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Provider store={store} >
          <Home />
        </Provider>
    );
  }
}

export default App;
