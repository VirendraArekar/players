import { configureStore } from "@reduxjs/toolkit";
import playersReducer from './features/playersSlice'

export default configureStore({
  reducer: {
    players: playersReducer,
  },
});