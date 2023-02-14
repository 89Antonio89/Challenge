import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const MapContainer = (props) => {
  const { lat, lng } = props;
  return (
    <Map
      google={props.google}
      zoom={2}
      style={mapStyles}
      initialCenter={{ lat, lng }}
    >
      <Marker position={{ lat, lng }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCVj7g65yuzX0HxGwjQfFHnqX9pBPCxR3E",
})(MapContainer);
