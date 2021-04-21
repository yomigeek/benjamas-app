import React, {useState, useEffect} from "react";
import axios from "axios";
import {TilesWrapper, MoreWrapper} from "../../components/common/Styles";
import Button from "../../components/common/Button";

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [seriesInView, setMoviesInView] = useState(21);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let paginatedMovies = [];
    axios
      .get(
        process.env.REACT_APP_JSON_FILE_URL ||
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      ) // JSON File Path
      .then((response) => {
        const getMovies = response.data.entries.filter(
          (value) => value.programType === "movie" && value.releaseYear >= 2010
        );
        if (totalMovies === 0) {
          setTotalMovies(getMovies?.length);
        }
        for (let i = 0; i < seriesInView; i++) {
          if (getMovies[i] !== undefined) {
            paginatedMovies.push(getMovies[i]);
          }
        }
        setAllMovies(
          paginatedMovies.sort(function (firstValue, secondValue) {
            const x = firstValue.title.toLowerCase();
            const y = secondValue.title.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
          })
        );
        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
        setError(true);
      });
  }, [seriesInView, totalMovies]);

  const addMoreMoviesInView = () => {
    if (seriesInView < totalMovies) {
      setMoviesInView(seriesInView + 21);
    }
  };

  return (
    <>
      <TilesWrapper>
        {loading ? <span>Loading...</span> : ""}
        {error ? <span>Oops. something went wrong...</span> : ""}
        {allMovies.map((tile) => {
          return (
            <div key={tile.title}>
              <img src={tile.images?.["Poster Art"].url} alt="img" />
              <span>{tile.title}</span>
            </div>
          );
        })}
      </TilesWrapper>
      {!loading && !error && (
        <MoreWrapper>
          <Button text={"View More"} clickAction={addMoreMoviesInView} />
        </MoreWrapper>
      )}
    </>
  );
};

export default Movies;
