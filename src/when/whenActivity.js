import React, { Component, Alert, Button } from "react";

class whenActivity extends Component {
  handleUserSubmit = () => {
    alert("cool dude");
  };

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
          <button name="button-1" value="15" onClick={this.onGreatClick}>
            15 min
          </button>
          <button name="button-2" value="30" onClick={this.onAmazingClick}>
            30 min
          </button>
          <button name="button-3" value="45" onClick={this.onAmazingClick}>
            45 min
          </button>
          <button name="button-4" value="60" onClick={this.onAmazingClick}>
            60 min
          </button>

          <div style={{ height: 10 }}> </div>
        </div>
      </div>
    );
  }
}

export default whenActivity;
