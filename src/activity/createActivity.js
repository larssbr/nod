import React, { Component, Alert } from "react";

class createActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredInformation: false,
      inputInfoText: "",
      inputValue: ""
    };
  }

  handleUserSubmit = () => {
    alert("cool dude");
  };

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  alertMessage = () => {
    return this.state.inputValue;
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
          <p> Type in the activity here</p>
          <form>
            <label>
              What i want to do:
              <div style={{ height: 10 }}> </div>
              <input
                type="text"
                name="name"
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}
              />
            </label>
            <input
              className="submit-string"
              type="submit"
              value="Submit"
              onClick={() =>
                this.setState({ enteredInformation: true }, () =>
                  alert(this.alertMessage())
                )
              }
            />
          </form>
          <div style={{ height: 10 }}> </div>
          <p> text in state</p>
          <p> {this.alertMessage()} </p>
        </div>
      </div>
    );
  }
}

export default createActivity;
