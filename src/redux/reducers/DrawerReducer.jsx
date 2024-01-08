import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  ContentComponent: <p>abc</p>,
  onOk: (e) => {
    alert("ok");
  },
};

const DrawerReducer = createSlice({
  name: "DrawerReducer",
  initialState,
  reducers: {
    handleDrawerAction: (state, action) => {
      state.open = action.payload;
    },
    updateContentDrawer: (state, action) => {
      state.open = true;
      state.ContentComponent = action.payload;
    },
    updateOnOkAction: (state, action) => {
      state.onOk = action.payload;
    },
  },
});

export const { handleDrawerAction, updateContentDrawer, updateOnOkAction } =
  DrawerReducer.actions;

export default DrawerReducer.reducer;
