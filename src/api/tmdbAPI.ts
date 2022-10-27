import axios from "redaxios";

const TMDB_API_BASE_URL:string = 'https://api.themoviedb.org';
const TMDB_API_VERSION:number = 3;
const TMDB_API_KEY:string = "46ee0c141c40a47a0687b4005ff79cbd";

export const tmdbAPI = axios.create({
  baseURL: TMDB_API_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  }
});

export async function getPopularMovies() {
  try {
    const res = await axios.get(
      `${TMDB_API_BASE_URL}/${TMDB_API_VERSION}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );

    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

export async function getMovieGenres() {
  const res = await axios.get(
    `${TMDB_API_BASE_URL}/${TMDB_API_VERSION}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
  );

  const genres: [] = res.data.genres;
  return (genres);
};