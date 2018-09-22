import React, { Component } from "react";

class logInComponent extends Component {
  render() {
    return (
      <div
        className="App-logInn"
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
    );
  }
}

export default logInComponent;
