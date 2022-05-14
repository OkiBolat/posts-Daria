import postReducer from "./reducer"
const {combineReducers} = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
  products: postReducer
  
})

export default rootReducer;