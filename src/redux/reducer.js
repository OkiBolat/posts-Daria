import { createSlice } from '@reduxjs/toolkit';
import { getPostsThunk, addPostThunk } from './actionsCreator';

const toolkitSlice = createSlice({
  name: 'posts',
  initialState: {
    filteredPosts: [],
    posts: [],
    requestInProgress: false,
  },
  reducers: {
    getPostsByFilter(state, action) {
      const newState = state;
      newState.filteredPosts = newState
        .posts.filter((post) => post.postText === action.payload);
    },
    getPosts(state) {
      const newState = state;
      newState.filteredPosts = [...newState.posts];
    },
  },
  extraReducers: {
    [getPostsThunk.pending]: (state) => {
      const newState = state;
      newState.requestInProgress = true;
    },
    [getPostsThunk.fulfilled]: (state, action) => {
      const newState = state;
      newState.posts = action.payload.reverse();
      newState.filteredPosts = action.payload.reverse();
      newState.requestInProgress = false;
    },
    [getPostsThunk.rejected]: () => {
      // eslint-disable-next-line no-console
      console.error('Not response');
    },
    [addPostThunk.fulfilled]: (state, action) => {
      const newState = state;
      newState.posts = [action.payload, ...newState.posts];
      newState.filteredPosts = [action.payload, ...newState.posts];
    },
  },
});

export const { getPostsByFilter, getPosts } = toolkitSlice.actions;

export default toolkitSlice.reducer;
