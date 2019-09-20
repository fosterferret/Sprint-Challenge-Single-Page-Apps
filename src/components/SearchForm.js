import React, { useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
 
  return (
    <section className="search-form">
     // Add a search form here
    </section>
  );
}
