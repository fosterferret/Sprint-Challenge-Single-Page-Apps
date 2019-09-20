import React from "react";

function EpisodeCard({ name, airDate, episode}) {
  return (
    <>
        <h2> {name} </h2>
        <h4> {airDate} </h4>
        <h4> {episode} </h4>
      )}
    </>
  );
}

export default EpisodeCard;