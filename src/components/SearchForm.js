import React, { useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(query);
  };

 
  return (
    <>
      <section className="search-form">
        <form onSubmit={handleSubmit} className="searchBox">
          <input
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for a character"
            value={query}
            name="name"
            className="searchInput"
          />
          <button type="submit" className="searchButton">
            <i className="material-icons">Search</i>
          </button>
        </form>
      </section>
      <div class="results">
        {results.map((character, index) => {
          return (
            <div class="character-container grid-view">
              <CharacterCard
                key={index}
                name={character.name}
                species={character.species}
                episodes={character.episode}
                image={character.image}
                location={character.location.name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
