import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'counter',
  initialState: {
    openSideMenu: false
  },
  reducers: {
    TOGGLE_SIDE_MENU: (state) => {
      return {
        ...state,
        openSideMenu: !state.openSideMenu
      };
    }
  }
});

// Action creators are generated for each case reducer function
export const { TOGGLE_SIDE_MENU } = globalSlice.actions;

export default globalSlice.reducer;
