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
    <section className="search-form">
     // Add a search form here
    </section>
  );
}
