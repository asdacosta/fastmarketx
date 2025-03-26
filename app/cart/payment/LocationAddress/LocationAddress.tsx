import React, { useEffect, useState } from "react";
import Location from "@/app/menu/Store/Location/Location";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import styles from "./LocationAddress.module.css";

function LocationAddress() {
  const [regions, setRegions] = useState<{ name: string; code: string }[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const GEO_NAMES_USERNAME = process.env.NEXT_PUBLIC_GEO_NAMES_USERNAME || "";

  useEffect(() => {
    // Fetch Regions
    fetch(
      `http://api.geonames.org/childrenJSON?geonameId=2300660&username=${GEO_NAMES_USERNAME}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data || !data.geonames) {
          console.error("Invalid API response:", data);
          return;
        }
        const regionList = data.geonames.map(
          (region: { name: string; adminCode1: string }) => ({
            name: region.name,
            code: region.adminCode1,
          })
        );
        setRegions(regionList);
      })
      .catch((error) => console.error("Error fetching regions:", error));
  }, [GEO_NAMES_USERNAME]);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const regionCode = event.target.value;
    setSelectedRegion(regionCode);

    if (!regionCode) return;

    // Fetch corresponding cities of selected region
    fetch(
      `http://api.geonames.org/searchJSON?country=GH&adminCode1=${regionCode}&featureClass=P&maxRows=100&username=${GEO_NAMES_USERNAME}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data || !data.geonames) {
          console.error("Invalid city response:", data);
          setCities([]);
          return;
        }
        const cityNames = data.geonames.map(
          (city: { name: string }) => city.name
        );
        setCities(cityNames);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
        setCities([]);
      });
  };

  return (
    <div className={styles.locationBox}>
      <h2>YOUR LOCATION</h2>
      <div className={styles.locationDetails}>
        <div className={styles.fullName}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.mobile}>
          <div>
            <label htmlFor="mobile1">Mobile Number</label>
            <input type="tel" id="mobile1" name="mobile1" />
          </div>
          <div>
            <label htmlFor="mobile2">Backup Mobile Number</label>
            <input type="tel" id="mobile2" name="mobile2" />
          </div>
        </div>
        <div className={styles.regionCity}>
          <div>
            <label htmlFor="region">Region</label>
            <select
              id="region"
              name="region"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="" disabled>
                Select region
              </option>
              {regions.map((region) => (
                <option key={region.code} value={region.code}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <select id="city" name="city" disabled={!selectedRegion}>
              <option value="" disabled>
                Select city
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Provider store={store}>
          <Location selling={false} />
        </Provider>
        <div className={styles.extras}>
          <label htmlFor="extras">Extra info about location</label>
          <textarea id="extras" name="extras" rows={3} cols={50}></textarea>
        </div>
      </div>
    </div>
  );
}

export default LocationAddress;
