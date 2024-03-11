import { createSlice } from '@reduxjs/toolkit';

export const StateStore = createSlice({
  name: 'state',
  initialState: { 
    value: false,
    right: false // Adding another boolean value called "right"
  },
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    },
    
    updateRight: (state, action) => {
      state.right = action.payload;
    }
  },
});

export const { info, updateRight } = StateStore.actions; // Including the new action "updateRight"
export default StateStore.reducer;
