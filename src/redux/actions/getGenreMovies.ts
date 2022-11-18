import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";
import { useLocation } from 'react-router-dom';



export const getGenreMovies = createAsyncThunk(
  "genreMovies/get",
  async (genreId) => {
    const res = await tmdbAPI.get("/3/discover/movie/", {
      params: {
        with_genres: genreId,
        page: 1,
      }
    });
    return res.data.results
  }
);

// export const getGenreMovies = createAsyncThunk(
//   "genreMovies/get",
//   async (genreId) => {
//     const res = await tmdbAPI.get("/3/discover/movie/", {
//       params: {
//         with_genres: genreId,
//         page: 1,
//       }
//     });
//     return res.data
//   }
// );