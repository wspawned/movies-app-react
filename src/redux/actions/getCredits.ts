import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";

export const getCredits = createAsyncThunk(
  "credits/get",
  //@ts-ignore
  async (id) => {
      const res = await tmdbAPI.get(`/3/movie/${id}/credits`, {
        params: {

        }
      });
      return res.data;
  }
);