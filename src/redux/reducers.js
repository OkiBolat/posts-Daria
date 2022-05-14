import postReducer from './reducer';

const { combineReducers } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  posts: postReducer,

});

export default rootReducer;
