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
      state.requestInProgress = true;
    },
    [getPostsThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.requestInProgress = false;
    },
    [getPostsThunk.rejected]: () => {
      console.error('Not response');
    },
    [addPostThunk.fulfilled]: (state, action) => {
      state.detailedCard = action.payload;
    },
    [addPostThunk.fulfilled]: (state, action) => {
      state.cards = state.cards.map((item) => (item.id === action.payload.id ? action.payload : item));
      state.filteredCards = state.filteredCards.map((item) => (item.id === action.payload.id ? action.payload : item));
    },
  },
});

export default toolkitSlice.reducer;
