import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class Map extends Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
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
