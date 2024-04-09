import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./service/userSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
