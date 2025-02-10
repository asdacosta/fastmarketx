import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setField } from "@/app/redux/slices/CreateStoreFormSlice";
import styles from "./Location.module.css";
import { MapPinHouse } from "lucide-react";
import {
  GoogleMap,
  Marker,
  Autocomplete,
  useJsApiLoader,
} from "@react-google-maps/api";
import "./GoogleAutoComplete.css";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

// Specifying the "places" library for Google Maps API
const libraries: "places"[] = ["places"]; // "place"[] means an array where each element must be "places" only
const defaultCenter = { lat: 6.6731, lng: -1.5654 }; // KNUST, Ghana

function Location() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries, // Loading the "places" library for autocomplete
  });

  const dispatch = useDispatch();
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>("");
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const customMarkerIcon = isLoaded
    ? {
        url:
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#E8CD04"><path  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`
          ),
        scaledSize: new window.google.maps.Size(35, 35),
        anchor: new window.google.maps.Point(20, 40),
      }
    : undefined;

  const handlePlaceSelect = () => {
    if (autocomplete) {
      // Get selected place
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        // Update with new location
        setLocation(newLocation);
        dispatch(setField({ field: "location", value: true }));

        setFeedback("Location set!");
        setTimeout(() => setFeedback(""), 2000);
      }
    }
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setLocation(newLocation);
        dispatch(setField({ field: "location", value: true })); // Update Redux

        setFeedback("Location set!");
        setTimeout(() => setFeedback(""), 2000);
        setLoading(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        setError("Failed to fetch location. Please enable location services.");
        setLoading(false);
      }
    );
  };
  // Return if Google Maps API is not loaded
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <div className={styles.location}>
      <div className={styles.label}>
        <span>Location (Where you'll sell from)</span>
        <p>Kindly ensure you're present at the location before setting it.</p>
      </div>

      <button
        className={styles.locationButton}
        onClick={handleUseCurrentLocation}
        disabled={loading}
      >
        <MapPinHouse size={15} />
        <span>{loading ? "Fetching location..." : "Use current location"}</span>
      </button>

      <div className={styles.searchBox}>
        <p>Prefer to search? Find your location here.</p>
        <Autocomplete
          onLoad={setAutocomplete}
          onPlaceChanged={handlePlaceSelect}
        >
          <input
            type="text"
            placeholder="Search for a location..."
            className={styles.input}
          />
        </Autocomplete>
      </div>

      <span className={styles.feedback}>{location ? feedback : ""}</span>
      {error && <span className={styles.error}>{error}</span>}

      <div className={styles.mapContainer}>
        <GoogleMap
          mapContainerStyle={{
            height: "15rem",
            width: "100%",
          }}
          zoom={13}
          center={location || defaultCenter}
        >
          {/* Place marker when a location is selected */}
          {location && (
            <Marker
              position={location}
              icon={customMarkerIcon}
              animation={window.google.maps.Animation.BOUNCE}
            />
          )}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Location;
