import React from "react";

export default function CharacterCard({
  image,
  name,
  species,
  episodes,
  status,
  location
}) {
  return (
    <>
      {/* <img className="rm-logo" alt="logo"/> */}
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        {species} - {status}
      </p>
      {/* <img className="location-icon" alt="location-icon"/> */}
      <p>{location}</p>
      <div className="footer">
        <p>{episodes.length} Episode(s)</p>
      </div>
    </>
  );
}
