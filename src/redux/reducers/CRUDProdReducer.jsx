import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrProd: [],
  prodInfo: {
    value: {
      id: "",
      name: "",
      price: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
    },
  },
};

const CRUDProdReducer = createSlice({
  name: "CRUDProdReducer",
  initialState,
  reducers: {
    handleInputProductAction: (state, actions) => {
      const { id, value } = actions.payload;
      state.prodInfo.value[id] = value;

      //console.log(state.prodInfo);
    },
    addItemAction: (state, action) => {
      state.arrProd.push(action.payload);
      state.prodInfo.value = {
        id: "",
        name: "",
        price: "",
      };
    },
    deleteItemAction: (state, action) => {
      const { index } = action.payload;
      state.arrProd.splice(index, 1);
    },
  },
});

export const { handleInputProductAction, addItemAction, deleteItemAction } =
  CRUDProdReducer.actions;

export default CRUDProdReducer.reducer;
