import { createSlice } from "@reduxjs/toolkit";

export const StateStore = createSlice({
  name: "state",
  initialState: {
    value: false,
    right: false,
    page: "Home",
  },
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    },

    updateRight: (state, action) => {
      state.right = action.payload;
    },

    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { info, updateRight, updatePage } = StateStore.actions;
export default StateStore.reducer;
