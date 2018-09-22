import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

const config = {
  debugMode: env.NODE_ENV === "development",
  apiUrl: env.REACT_APP_API_URL,
  googleMapsApiKey: env.REACT_APP_GOOGLE_MAPS_API_KEY
};

export default config;
