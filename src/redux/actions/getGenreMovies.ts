import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";
import { useLocation } from 'react-router-dom';
import { type } from "os";

export type ApiResponse = {
  page: number;
  results: GenreMoviesResult[];
  total_pages: number;
  total_results: number;
}

export type GenreMoviesResult = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getGenreMovies = createAsyncThunk(
  "genreMovies/get",
  async (genreId:string) => {
    const res = await tmdbAPI.get("/3/discover/movie/", {
      params: {
        with_genres: genreId,
        page: 1,
      }
    });
    return res.data.results as GenreMoviesResult[];
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