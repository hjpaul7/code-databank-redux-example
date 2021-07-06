import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async function () {
  const settings = {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoai5wYXVsN0BnbWFpbC5jb20iLCJpYXQiOjE2MjU1MjcxMDEsImV4cCI6MTYyNTYxMzUwMX0.rH_7kAjbD12-mZVmQE7ad02_0sXXNQbq9KtjwnIr7E8",
    }),
  };
  //   const response = await axios.get("http://localhost:3000/posts", settings);
  //   return response.data;
  const response = await fetch("http://localhost:3000/posts", settings);
  const data = await response.json();
  return data;
});

const initialState = {
  posts: [],
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  //   loading: false,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export default postsSlice.reducer;
