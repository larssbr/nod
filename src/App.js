import React, { Component } from "react";
import LogInComponent from "./auth/logInComponent";
import CreateActivity from "./activity/createActivity";
// import GoogleApi from "utils/GoogleApi";
import Map from "./components/Map/Map.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            backgroundColor: "#fda085",
            width: "60%",
            display: "flex",
            alignItems: "center",
            borderRadius: 22,
            justifyContent: "center",
            justifyItems: "center"
          }}
        >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Nod</h1>
          </header>
        </div>

        <p className="App-intro">To get started, log in here </p>

        <LogInComponent />

        <div style={{ height: 10 }}> </div>
        <CreateActivity />
        <div style={{ height: 10 }}> </div>
        <p> here i will put the map</p>
        <Map />
        <div />
      </div>
    );
  }
}

export default App;
