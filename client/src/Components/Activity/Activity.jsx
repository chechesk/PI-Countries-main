import React from "react";
import "../ActivitiesList/ActivitiesList";

export default function Activity({
  name,
  duration,
  season,
  dificulty,
  id,
}) {
  return (
    <div className="divActivityContainer">
      <h2 className="h2Activity">{name}</h2>
      <h3 className="h3Activity">Duracion: {duration}</h3>
      <h3 className="h3Activity">Temporada: {season}</h3>
      <h3 className="h3Activity">Dificultad: {dificulty}</h3>
      <h3>{id}</h3>
    </div>
  );
}
