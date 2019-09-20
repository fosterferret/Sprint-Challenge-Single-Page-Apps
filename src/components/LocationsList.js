import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      //.get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [locations]);

  return (
    <section className="location-list grid-view">
      {locations.map((location, index) => {
        return (
          <LocationCard
            key={index}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents.length}
          />
        );
      })}
    </section>
  );
}
