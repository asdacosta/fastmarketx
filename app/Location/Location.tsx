"use client";
import React from "react";
import styles from "./Location.module.css";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
const defaultCenter = { lat: 6.6731, lng: -1.5654 }; // Default location (KNUST, Ghana)

export default function Location() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["maps"],
  });

  // Get location from Redux store; if not available, use defaultCenter
  const storedLocation = useSelector(
    (state: RootState) => state.storeFormValue.location
  );
  const location = storedLocation ?? defaultCenter;

  // Define custom marker icon if needed
  const customMarkerIcon = isLoaded
    ? {
        url:
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#E8CD04"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`
          ),
        scaledSize: new window.google.maps.Size(35, 35),
        anchor: new window.google.maps.Point(20, 40),
      }
    : undefined;

  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <section className={styles.location}>
      <section className={styles.mapContainer}>
        <GoogleMap
          mapContainerStyle={{ height: "15rem", width: "100%" }}
          zoom={13}
          center={location}
        >
          <Marker
            position={location}
            icon={customMarkerIcon}
            animation={window.google.maps.Animation.BOUNCE}
          />
        </GoogleMap>
      </section>
    </section>
  );
}
