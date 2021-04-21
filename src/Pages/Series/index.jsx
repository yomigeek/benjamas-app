import React, {useState, useEffect} from "react";
import axios from "axios";
import {TilesWrapper, MoreWrapper} from "../../components/common/Styles";
import Button from "../../components/common/Button";

const Series = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allSeries, setAllSeries] = useState([]);
  const [totalSeries, setTotalSeries] = useState(0);
  const [seriesInView, setSeriesInView] = useState(21);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let paginatedSeries = [];
    axios
      .get(
        process.env.REACT_APP_JSON_FILE_URL ||
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      ) // JSON File Path
      .then((response) => {
        const getSeries = response.data.entries.filter(
          (value) => value.programType === "series" && value.releaseYear >= 2010
        );
        if (totalSeries === 0) {
          setTotalSeries(getSeries?.length);
        }
        for (let i = 0; i < seriesInView; i++) {
          if (getSeries[i] !== undefined) {
            paginatedSeries.push(getSeries[i]);
          }
        }
        setAllSeries(
          paginatedSeries.sort(function (firstValue, secondValue) {
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
  }, [seriesInView, totalSeries]);

  const addMoreSeriesInView = () => {
    if (seriesInView < totalSeries) {
      setSeriesInView(seriesInView + 21);
    }
  };

  return (
    <>
      <TilesWrapper>
        {loading ? <span>Loading...</span> : ""}
        {error ? <span>Oops. something went wrong...</span> : ""}
        {allSeries.map((tile) => {
          return (
            <div key={tile.title}>
              <img src={tile.images?.["Poster Art"].url} alt="img"/>
              <span>{tile.title}</span>
            </div>
          );
        })}
      </TilesWrapper>
      {!loading && !error && (
        <MoreWrapper>
          <Button text={"View More"} clickAction={addMoreSeriesInView} />
        </MoreWrapper>
      )}
    </>
  );
};

export default Series;
