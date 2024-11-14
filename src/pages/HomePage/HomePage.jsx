import { useEffect, useState } from "react";
import { getMovies } from "../../js/requestsAPI";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function trendingMovie() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    trendingMovie();
  }, []);
  return (
    <>
      <h1 className={css.title}>Trending Movies Today</h1>
      <MovieList movies={movies} statusLoader={loader} />
    </>
  );
};
export default HomePage;
