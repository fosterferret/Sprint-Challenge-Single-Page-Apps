import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [activePage, setActivePage] = useState(1);

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
  }, [characters]);

  return (
    <section className="character-list">
       {characters.map((character, index) => {
          return (
            <div class="character-container">
              <CharacterCard
                key={index}
                name={character.name}
                species={character.species}
                status={character.status}
                episodes={character.episode}
                image={character.image}
                location={character.location.name}
              />
            </div>
          );
        })}
    </section>
  );
}
