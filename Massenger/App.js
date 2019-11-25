import React, { Component } from 'react';

import { Provider } from "react-redux";
import Home from "./src/Screens/Home";
import store from "./src/Store/index.js";


class App extends Component {


  render() {
    return (
     <Provider store={store}>
       <Home /> 
    </Provider>
    );
  }
}

export default App;
