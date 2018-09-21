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

        <div
          style={{
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center"
          }}
        >
          <div
            className="MakeNod"
            style={{
              backgroundColor: "#fda085",
              width: "60%",
              justifyContent: "center",
              justifyItems: "center",
              borderRadius: 22
            }}
          >
            <form>
              <div style={{ height: 10 }}> </div>
              <label>
                UserName:
                <input type="text" name="name" />
              </label>
            </form>
            <div style={{ height: 10 }}> </div>
            <form>
              <label>
                Password:
                <input type="text" name="name" />
              </label>
              <div style={{ height: 10 }}> </div>
              <input type="submit" value="Submit" />
            </form>
            <div style={{ height: 10 }}> </div>
          </div>
        </div>

        <div style={{ height: 10 }}> </div>
        <div
          style={{
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center"
          }}
        >
          <div
            className="MakeNod"
            style={{
              backgroundColor: "#fda085",
              width: "60%",
              justifyContent: "center",
              justifyItems: "center",
              borderRadius: 22
            }}
          >
            <p> Type in the activity here</p>
            <form>
              <label>
                What i want to do:
                <div style={{ height: 10 }}> </div>
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <div style={{ height: 10 }}> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
