import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";
import { searchMovies } from "../../js/requestsAPI";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MoviesPage = () => {
  const [movies, setSearchMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [stateSearch, setStateSearch] = useState(false);

  const query = searchParams.get("query");

  useEffect(() => {
    if (query === null) return;
    if (query === "") {
      toast.error("Oops... Enter data to search");
    }
    requestMovie(searchParams);
  }, [searchParams]);

  function handleSearch(evt) {
    evt.preventDefault();

    const formElem = evt.currentTarget;
    const queryValue = formElem.elements.name.value.trim("");
    setSearchParams({
      query: queryValue,
    });
    formElem.reset();
  }
  async function requestMovie(searchParams) {
    if (searchParams) {
      try {
        setStateSearch(false);
        setLoader(true);
        const data = await searchMovies(query);
        if (data.length === 0) setStateSearch(true);
        setSearchMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    } else {
      toast.error("Oops... Enter data to search");
    }
  }
  return (
    <header>
      <Toaster position="top-right" reverseOrder={true} />

      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.input}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>

      {movies.length > 0 && (
        <MovieList location={location} movies={movies} statusLoader={loader} />
      )}
      {stateSearch && movies.length === 0 && <NotFoundPage />}
    </header>
  );
};
export default MoviesPage;
