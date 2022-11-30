import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";


export const getPerson = createAsyncThunk(
  'person/get',
  async (id:number) => {
    const res = await tmdbAPI.get(`/3/person/${id}`);
    return res.data
  }
);