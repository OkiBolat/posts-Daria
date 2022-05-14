import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsServices } from "../services/postServices"; 

export const getPostsThunk = createAsyncThunk("products/cards", async function () {
  const response = await postsServices.getPosts();
  const data = await response.data
  return data;
})

export const addPostThunk = createAsyncThunk("products/switchFav", async (obj) => {
  const resp = await postsServices.addPost({obj})
  return resp.data
})