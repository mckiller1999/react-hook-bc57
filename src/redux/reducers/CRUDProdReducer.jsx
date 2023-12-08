import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrProd: [
    { id: 1, name: "iphone", price: 10000000 },
    { id: 2, name: "iphone", price: 20000000 },
  ],
  prodInfo: {
    id: "",
    name: "",
    price: "",
  },
};

const CRUDProdReducer = createSlice({
  name: "CRUDProdReducer",
  initialState,
  reducers: {
    handleInputProductAction: (state, actions) => {
      const { id, value } = actions.payload;
      state.prodInfo[id] = value;
      //console.log(state.prodInfo);
    },
  },
});

export const { handleInputProductAction } = CRUDProdReducer.actions;

export default CRUDProdReducer.reducer;
