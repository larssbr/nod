import React, { Component } from "react";

class createActivity extends Component {
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
    );
  }
}

export default createActivity;
