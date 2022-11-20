import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";

export const getMovie = createAsyncThunk(
  "movie/get",
  async (id) => {
      const res = await tmdbAPI.get(`/3/movie/${id}`, {
        params: {
          append_to_response: 'videos',
        }
      });
      return res.data;
  }
);