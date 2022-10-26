import { tmdbAPI } from '../api/tmdbAPI';

async function getGenres() {
  const res = await tmdbAPI.get('/3/genre/movie/list');
  console.log(res);
}