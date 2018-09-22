import React, { Component } from "react";
import LogInComponent from "./auth/logInComponent";
import CreateActivity from "./activity/createActivity";
import WhenActivity from "./when/whenActivity";
// import GoogleApi from "utils/GoogleApi";
import Map from "./components/Map/Map.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputInfoTextDataFromChild: "",
      inputTimeDataFromChild: 60
    };
  }

  myCallbackActivity = dataFromChild => {
    this.setState({ inputInfoTextDataFromChild: dataFromChild });
  };

  myCallbackTimeOfEvent = dataFromChild => {
    this.setState({ inputTimeDataFromChild: dataFromChild });
  };

  render() {
    return (
      <div className="App">
        <div>
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
        </div>

        <p className="App-intro">To get started, log in here </p>
        <p> screen 1</p>
        <LogInComponent />

        <div style={{ height: 10 }}> </div>
        <p> screen 2</p>
        <CreateActivity callbackFromParent={this.myCallbackActivity} />
        <div style={{ height: 10 }}> </div>
        <p> the state from screen 2</p>
        <p> here: </p>
        <p>{this.state.inputInfoTextDataFromChild}</p>

        <p> screen 3</p>
        <WhenActivity callbackFromParent={this.myCallbackTimeOfEvent} />
        <div style={{ height: 10 }}> </div>

        <p> screen 4</p>

        <Map />

        <p> screen 5</p>
        <p> the invitation preview</p>
        <p> the Event:</p>

        <p>{this.state.inputInfoTextDataFromChild}</p>
        <div style={{ height: 10 }}> </div>
        <p> the time entered</p>
        <div style={{ height: 10 }}> </div>
        <p> {this.state.inputTimeDataFromChild}</p>

        <p> the map with the location</p>
        <p> send it nooooooow</p>
        <div />
      </div>
    );
  }
}

export default App;
