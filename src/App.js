import React, { Component } from "react";
import { Provider } from "react-redux";
import Product from "./component/Produc";
import store from "./Store/index";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" style={{ textAlign: "center" }}>
          <Product />
        </div>
      </Provider>
    );
  }
}

export default App;
