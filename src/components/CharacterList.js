import React, { useEffect, useState } from "react";;
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      //.get(`https://rickandmortyapi.com/api/character/?page=${activePage}`)
      .then(response => {
        setCharacters(response.data.results);
        console.log(characters);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
