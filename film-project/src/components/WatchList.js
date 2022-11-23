import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function WatchList() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movice-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenecek Filmler</h1>
        </div>

        {!!watchlist && (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchList;
