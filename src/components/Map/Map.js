import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";
//import { compose, withProps } from "recompose";

let markers = [];
let markerOfEvent = [
  {
    name: "My event",
    lat: "31.633980",
    lng: "74.872261"
  }
];

let myPositionMarker = [
  {
    name: "My Position",
    lat: "20.5937",
    lng: "74.7893"
  }
];

//const myLatLng = new google.maps.LatLng(59.911491, 10.757933);

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lng: ""
    };
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 59.911491, lng: 10.757933 }}
        defaultZoom={13}
      />
    ));
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center"
        }}
      >
        <div style={{ width: "500px", backgroundColor: "#568989" }}>
          <p> enter the location of the event</p>
          <GoogleMapExample
            containerElement={
              <div style={{ height: `500px`, width: "500px" }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}
export default Map;
