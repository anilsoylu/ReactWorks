import axios from "axios";
import { useEffect, useState } from "react";
import ResultCart from "./ResultCart";

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
        );

        if (!res.data.errors) {
          setResults(res.data.results);
        } else {
          setResults([]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (query.length > 0) {
      getMovies();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/2Sm3asuwKVNTzgm2nF6hp5mwEfh.jpg"
            alt=""
          />
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>
            <h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Film, dizi, kişi ara..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {!!results.map && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCart movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;
