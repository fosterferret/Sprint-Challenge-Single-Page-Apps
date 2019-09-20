import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        debugger;
        setEpisodes(res.data.results);
      })
      .catch(err => {
        console.log(err, "No data.");
      });
  }, []);

  return (
    <section className="episode-list grid-view">
      {episodes.map((episode, index) => {
        return (
          <EpisodeCard
            key={index}
            name={episode.name}
            airDate={episode.air_date}
            episode={episode.episode}
          />
        );
      })}
    </section>
  );
}

export default EpisodesList;
