import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <>
      <im />
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>{residents} Residents</p>
    </>
  );
}
