import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function MovieControls({ movie, type }) {
  const { removeMovieFromWatchList } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      <button className="ctrl-btn">
        <i className="fa-fw far fa-eye"></i>
      </button>
      <button
        className="ctrl-btn"
        onClick={() => removeMovieFromWatchList(movie.id)}
      >
        <i className="fa-fw fa fa-trash"></i>
      </button>
    </div>
  );
}

export default MovieControls;
