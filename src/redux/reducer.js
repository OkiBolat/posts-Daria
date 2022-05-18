import { createSlice } from '@reduxjs/toolkit';
import { getPostsThunk, addPostThunk } from './actionsCreator';

const toolkitSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    requestInProgress: false,
  },
  extraReducers: {
    [getPostsThunk.pending]: (state) => {
      const newState = state;
      newState.requestInProgress = true;
    },
    [getPostsThunk.fulfilled]: (state, action) => {
      const newState = state;
      newState.posts = action.payload;
      newState.requestInProgress = false;
    },
    [getPostsThunk.rejected]: () => {
      // eslint-disable-next-line no-console
      console.error('Not response');
    },
    [addPostThunk.fulfilled]: (state, action) => {
      const newState = state;
      newState.posts = [action.payload, ...newState.posts];
    },
  },
});

export default toolkitSlice.reducer;
