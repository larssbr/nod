import React, { Component, Button } from "react";
import LogInComponent from "./auth/logInComponent";
import CreateActivity from "./activity/createActivity";
import Avatar from "avataaars";
import WhenActivity from "./when/whenActivity";
// import GoogleApi from "utils/GoogleApi";
import Map from "./components/Map/Map.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputInfoTextDataFromChild: "",
      inputTimeDataFromChild: 60,
      locationFromChild: ""
    };
  }

  myCallbackActivity = dataFromChild => {
    this.setState({ inputInfoTextDataFromChild: dataFromChild });
  };

  myCallbackTimeOfEvent = dataFromChild => {
    this.setState({ inputTimeDataFromChild: dataFromChild });
  };

  myCallbackEventLocation = dataFromChild => {
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
              <div className="avatar-moving">
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  avatarStyle="Transparent"
                  topType="Hat"
                  accessoriesType="Blank"
                  facialHairType="BeardMedium"
                  facialHairColor="Black"
                  clotheType="Hoodie"
                  clotheColor="Red"
                  eyeType="Wink"
                  eyebrowType="UpDown"
                  mouthType="Twinkle"
                  skinColor="Pale"
                />
              </div>

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

        <Map callbackFromParent={this.myCallbackEventLocation} />

        <p> screen 5</p>
        <div
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
            <p> The invitation preview</p>
            <p> the Event:</p>
            <div
              style={{
                backgroundColor: "#566556",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: 60,
                fontSize: 16,
                fontWeight: 600
              }}
            >
              <p>{this.state.inputInfoTextDataFromChild}</p>
            </div>

            <div style={{ height: 10 }}> </div>
            <p> the time entered</p>
            <div style={{ height: 10 }}> </div>
            <p> {this.state.inputTimeDataFromChild} min </p>

            <p> the map with the location</p>
            <p>[lat, lng]</p>

            <p> send it nooooooow</p>
            <button> click me </button>
            <div style={{ height: 10 }}> </div>
          </div>
          <div />
        </div>

        <p> screen 6</p>
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
            <button className="profile">
              <div className="avatar">
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  avatarStyle="Transparent"
                  topType="ShortHairDreads02"
                  accessoriesType="Blank"
                  hairColor="BlondeGolden"
                  facialHairType="Blank"
                  clotheType="Hoodie"
                  clotheColor="Red"
                  eyeType="Cry"
                  eyebrowType="RaisedExcited"
                  mouthType="Smile"
                  skinColor="Tanned"
                />
              </div>
              <div className="profile-name">
                <h2>Peter Pan</h2>
              </div>
            </button>
            <button className="profile">
              <div className="avatar">
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  avatarStyle="Transparent"
                  topType="LongHairMiaWallace"
                  accessoriesType="Blank"
                  hairColor="Platinum"
                  facialHairType="BeardLight"
                  facialHairColor="BrownDark"
                  clotheType="BlazerShirt"
                  clotheColor="PastelRed"
                  eyeType="Squint"
                  eyebrowType="DefaultNatural"
                  mouthType="Sad"
                  skinColor="Light"
                />
              </div>
              <div className="profile-name">
                <h2>Christian Conan</h2>
              </div>
            </button>
            <button className="profile">
              <div className="avatar">
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  avatarStyle="Transparent"
                  topType="ShortHairFrizzle"
                  accessoriesType="Blank"
                  hairColor="Black"
                  facialHairType="BeardMagestic"
                  facialHairColor="Platinum"
                  clotheType="ShirtVNeck"
                  clotheColor="Gray01"
                  eyeType="Happy"
                  eyebrowType="FlatNatural"
                  mouthType="Eating"
                  skinColor="DarkBrown"
                />
              </div>
              <div className="profile-name">
                <h2>Chi Li</h2>
              </div>
            </button>
            <button className="profile">
              <div className="avatar">
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  avatarStyle="Transparent"
                  topType="Hat"
                  accessoriesType="Round"
                  hairColor="Brown"
                  facialHairType="Blank"
                  facialHairColor="Platinum"
                  clotheType="ShirtVNeck"
                  clotheColor="PastelBlue"
                  eyeType="EyeRoll"
                  eyebrowType="UpDownNatural"
                  mouthType="Vomit"
                  skinColor="Black"
                />
              </div>
              <div className="profile-name">
                <h2>Conan James</h2>
              </div>
            </button>
            <button className="profile">
              <div className="avatar">
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  avatarStyle="Transparent"
                  topType="ShortHairShortRound"
                  accessoriesType="Sunglasses"
                  hairColor="Brown"
                  facialHairType="BeardMedium"
                  facialHairColor="BlondeGolden"
                  clotheType="CollarSweater"
                  clotheColor="Blue02"
                  eyeType="EyeRoll"
                  eyebrowType="AngryNatural"
                  mouthType="Eating"
                  skinColor="Tanned"
                />
              </div>
              <div className="profile-name">
                <h2>Hans Meyer</h2>
              </div>
            </button>
            <button className="profile">
              <div className="avatar">
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  avatarStyle="Transparent"
                  topType="LongHairFroBand"
                  accessoriesType="Round"
                  hairColor="BlondeGolden"
                  facialHairType="MoustacheFancy"
                  facialHairColor="Red"
                  clotheType="BlazerSweater"
                  clotheColor="PastelOrange"
                  graphicType="Skull"
                  eyeType="EyeRoll"
                  eyebrowType="SadConcerned"
                  mouthType="Sad"
                  skinColor="Pale"
                />
              </div>
              <div className="profile-name">
                <h2>Tom Eckardt</h2>
              </div>
            </button>
            <button className="profile">
              <div className="avatar">
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  avatarStyle="Transparent"
                  topType="LongHairDreads"
                  accessoriesType="Wayfarers"
                  hairColor="Auburn"
                  facialHairType="MoustacheMagnum"
                  facialHairColor="BlondeGolden"
                  clotheType="Overall"
                  clotheColor="Gray02"
                  eyeType="WinkWacky"
                  eyebrowType="Angry"
                  mouthType="Concerned"
                  skinColor="DarkBrown"
                />
              </div>
              <div className="profile-name">
                <h2>Valentin Kauth</h2>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
