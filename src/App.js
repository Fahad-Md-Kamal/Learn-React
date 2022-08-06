import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState(null);

  function processMovieList(data) {
    const loadedMovies = [];
    for (const key in data){
      loadedMovies.push({
        id: key,
        title: data[key].title,
        openingText: data[key].openingText,
        releaseDate: data[key].releaseDate
      });
    }
    return loadedMovies;
  };

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoding(true);
    setError(null);
    try {
      const response = await fetch("https://react-http-7de36-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const preparedMovieData = processMovieList(data);
      setMovies([...preparedMovieData]);

    } catch (error) {
      setError(error.message);
    }
    setIsLoding(false);
  }, []);


  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  
  async function AddMovieHandler(movie) {
    await fetch("https://react-http-7de36-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json", {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    fetchMoviesHandler();
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoding) {
    content = <p>Loding...</p>;
  }



  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={AddMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
