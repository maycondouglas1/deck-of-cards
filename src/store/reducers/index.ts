import { combineReducers } from "@reduxjs/toolkit";

import cardSlice from "./cardSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  card: cardSlice,
  user: userSlice,
});

export default rootReducer;
