import { useState } from "preact/hooks";

export default function Geolocation() {
  const [isSupported] = useState(navigator.geolocation);
  const [currentLocation, setCurrentLocation] = useState<string>();

  function onClickShowMyLocationButton() {
    const success: PositionCallback = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCurrentLocation(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
    };

    const error = () => {
      setCurrentLocation("Unable to retrieve your location");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <section>
      <h2>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples"
          target="_blank"
          rel="noreferrer"
        >
          Geolocation API
        </a>
      </h2>
      <small>HTTPS only</small>
      <p>
        This API allows developers to request permission for geolocation data of
        a user's device.
      </p>
      {!isSupported ? (
        <p>
          <code>navigater.geolocation</code> is not supported in your browser
          :(.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          <button onClick={onClickShowMyLocationButton}>
            Show my location
          </button>
          <p>{currentLocation ?? "No location data yet."}</p>
        </div>
      )}
    </section>
  );
}
