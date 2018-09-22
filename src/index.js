import React from "react";
import ReactDOM from "react-dom";

import GoogleMapsLoader from "google-maps";
import "./index.css";
import App from "./App";

import settings from "./settings";

import registerServiceWorker from "./registerServiceWorker";
// new
import { unregister } from "./registerServiceWorker";

// set the google api key
GoogleMapsLoader.KEY = settings.googleMapsApiKey;
GoogleMapsLoader.LIBRARIES = ["places", "geometry"];
GoogleMapsLoader.REGION = "NO";
GoogleMapsLoader.LANGUAGE = "no";

//registerServiceWorker();

GoogleMapsLoader.load(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});

unregister();
