import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ResultCart({ movie }) {
  const { watchlist, addMovieToWatchList } = useContext(GlobalContext);

  const storedMovie = watchlist.find((m) => m.id === movie.id);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {!!movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            Yapım Yılı :
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="release-date">
            IMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={!!storedMovie}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCart;
