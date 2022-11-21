import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";

export const getRecommendedMovies = createAsyncThunk(
  "recommendedMovies/get",
  async (id) => {
      const res = await tmdbAPI.get(`/3/movie/${id}/recommendations`, {
        params: {
          page: 1,
        }
      });
      return res.data.results;
  }
);