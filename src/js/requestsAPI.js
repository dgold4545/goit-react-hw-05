import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGQ4MWU4YjYyZmU5ODRhZDlmNjQwOTFlNzliMWRjOCIsIm5iZiI6MTcyNDA4MzExMC4zNTU5NTYsInN1YiI6IjY2YzM2OTFhMWVlNjUxOWYxZTk2ZTdlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._SxLNtcgCOB5wfawjDVN906Uza0arH926JgxQoxl4hc",
  },
};

export const getMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);

  return response.data.results;
};

export const searchMovies = async (query) => {
  const params = {
    query,
    include_adult: false,
    language: "en-US",
    page: 1,
  };
  const response = await axios.get(
    `/search/movie?query=${params.query}&include_adult=${params.include_adult}&language=${params.language}&page=${params.page}`,
    options
  );

  return response.data.results;
};

export const getMoviesById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`, options);

  return data;
};

export const getCastList = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, options);

  return data;
};

export const getReviewsList = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, options);
  return data.results;
};
