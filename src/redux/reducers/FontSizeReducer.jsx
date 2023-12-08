import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fzDefault: 30,
};

const FontSizeReducer = createSlice({
  name: "FontSizeReducer",
  initialState,
  reducers: {
    plustFz: (state, action) => {
      state.fzDefault += action.payload;
    },
  },
});

export const { plustFz } = FontSizeReducer.actions;

export default FontSizeReducer.reducer;
