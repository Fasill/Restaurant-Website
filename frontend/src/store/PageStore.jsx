import { createSlice } from '@reduxjs/toolkit';

export const PageStore = createSlice({
  name: 'page',
  initialState: { 
    currentPage: "page1",
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = PageStore.actions;
export default PageStore.reducer;
