import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//createAsyncThunk dùng cho cách 2(extraReducer)
import axios from "axios";

const initialState = {
  arrProduct: [],
};

const ProductReducer = createSlice({
  name: "ProductReducer",
  initialState,
  reducers: {
    setArrprod: (state, action) => {
      state.arrProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductAsyncAction.fulfilled, (state, action) => {
      state.arrProduct = action.payload;
    });
  },
});

export const { setArrprod } = ProductReducer.actions;

export default ProductReducer.reducer;

//---------------action thunk (action bất đồng bộ gọi api)
export const getAllProductApiAction = () => {
  return async (dispatch) => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    const action = setArrprod(res.data.content);
    dispatch(action);
  };
};

//-----------action dùng cho extraReducer
export const getAllProductAsyncAction = createAsyncThunk(
  "ProductReducer/getAllProductAsyncAction",
  async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    return res.data.content;
  }
);
