import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function Watched() {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movice-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenen Filmler</h1>
        </div>

        {!!watched && (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Watched;
