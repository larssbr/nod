import React, { Component, Alert, Button } from "react";

class whenActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeUntilEvent: ""
    };
  }

  handleUserSubmit = () => {
    alert("cool dude");
  };

  onClickEventTime(timeUntilEvent) {
    // update the parent component
    this.props.callbackFromParent(timeUntilEvent);
  }

  render() {
    return (
      <div
        className="app-create-activity"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center"
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
          <p> Decide time from now</p>
          <button
            name="button-1"
            value="15"
            onClick={() => this.props.callbackFromParent(15)}
          >
            15 min
          </button>
          <button
            name="button-2"
            value="30"
            onClick={() => this.props.callbackFromParent(30)}
          >
            30 min
          </button>
          <button
            name="button-3"
            value="45"
            onClick={() => this.props.callbackFromParent(45)}
          >
            45 min
          </button>
          <button
            name="button-4"
            value="60"
            onClick={() => this.props.callbackFromParent(60)}
          >
            60 min
          </button>

          <div style={{ height: 10 }}> </div>
        </div>
      </div>
    );
  }
}

export default whenActivity;
