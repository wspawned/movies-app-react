import { tmdbAPI } from '../api/tmdbAPI';

export const getGenres =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const res = await tmdbAPI.get("/3/genre/movie/list");

    dispatch({
      type: "FETCH_GENRES",
      payload: res.data,
    });
  };
