import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";
import { STATIC_MOVIE_CATEGORIES } from "../slices/generalSlice";



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

const staticIds = STATIC_MOVIE_CATEGORIES.map((elm)=> {return elm.id} );

export const getGenreMovies = createAsyncThunk(
  "genreMovies/get",
  async (genreId:string) => {
    if(staticIds.includes(genreId)) {
      const res = await tmdbAPI.get(`/3/movie/${genreId}`, {
        params: {
          page: 1,
        }
      });
      return res.data.results as GenreMoviesResult[];
    } else {
      const res = await tmdbAPI.get("/3/discover/movie/", {
        params: {
          with_genres: genreId,
          page: 1,
        }
      });
      return res.data.results as GenreMoviesResult[];
    }

  }
);

// async (genreId:string) => {
//   const res = await tmdbAPI.get("/3/discover/movie/", {
//     params: {
//       with_genres: genreId,
//       page: 1,
//     }
//   });
//   return res.data.results as GenreMoviesResult[];
