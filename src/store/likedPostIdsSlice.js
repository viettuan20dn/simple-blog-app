import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favPostIds: [],
};
const likedPostIdsSlice = createSlice({
  name: "likedPostIds",
  initialState,
  reducers: {
    set: (state, action) => {
      state.favPostIds = action.payload;
    },
    add: (state, action) => {
      state.favPostIds.push(action.payload);
    },
    subtract: (state, action) => {
      state.favPostIds = state.favPostIds.filter((id) => id != action.payload);
    },
  },
});

export default likedPostIdsSlice.reducer;

export const { add, subtract, set } = likedPostIdsSlice.actions;
