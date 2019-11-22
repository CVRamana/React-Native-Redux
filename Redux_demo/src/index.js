import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Home from "./screen/home";
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    //child ko props deta hi global state acces karata hi
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
