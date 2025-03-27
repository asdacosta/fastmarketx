"use client";
import { ReactNode, useMemo } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const libraries: ("places" | "maps")[] = ["places", "maps"];

export default function GoogleMapsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const apiLoaderOptions = useMemo(
    () => ({
      googleMapsApiKey: GOOGLE_MAPS_API_KEY,
      libraries,
    }),
    []
  );

  const { isLoaded } = useJsApiLoader(apiLoaderOptions);

  return <>{isLoaded ? children : <p>Loading maps...</p>}</>;
}
