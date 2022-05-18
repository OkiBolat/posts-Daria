import { createAsyncThunk } from '@reduxjs/toolkit';
import { postsServices } from '../services/postServices';

export const getPostsThunk = createAsyncThunk('posts/get', async () => {
  const response = await postsServices.getPosts();
  const data = await response.data;
  return data;
});

export const addPostThunk = createAsyncThunk('posts/add', async (obj) => {
  const resp = await postsServices.addPost(obj);
  const data = await resp.data;
  return data;
});
