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

const libraries: "places"[] = ["places"];
const defaultCenter = { lat: 6.6731, lng: -1.5654 }; // KNUST, Ghana

function Location() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
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
        url: "https://mapmarker.io/api/v3/font-awesome/v6/pin?text=C&size=75&color=000&background=E8CD04&hoffset=0&voffset=0",
        scaledSize: new window.google.maps.Size(35, 35),
        anchor: new window.google.maps.Point(20, 40),
      }
    : undefined;

  // Handle location selection
  const onPlaceSelected = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

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
        <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceSelected}>
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
