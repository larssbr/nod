import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ backgroundColor: "#785453" }}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nod</h1>
        </header>
        <p className="App-intro">To get started, log in here </p>
      </div>
    );
  }
}

export default App;
