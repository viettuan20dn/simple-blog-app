import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import LikedPostIdsSlice from "./likedPostIdsSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    likedPostIds: LikedPostIdsSlice,
  },
});

export default store;
