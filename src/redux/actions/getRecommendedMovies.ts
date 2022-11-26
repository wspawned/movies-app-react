import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";

export const getRecommendedMovies = createAsyncThunk(
  "recommendedMovies/get",
  async (id:number) => {
      const res = await tmdbAPI.get(`/3/movie/${id}/recommendations`, {
        params: {
          page: 1,
        }
      });
      return res.data.results;
  }
);


export interface RecommendedMovies {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

interface Result {
  adult: boolean;
  backdrop_path?: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}