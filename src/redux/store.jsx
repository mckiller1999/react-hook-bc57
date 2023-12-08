import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from "./reducers/ChatReducer";

import FontSizeReducer from "./reducers/FontSizeReducer";
import CRUDProdReducer from "./reducers/CRUDProdReducer";
export const store = configureStore({
  reducer: {
    //các state của ứng dụng
    ChatReducer: ChatReducer,
    FontSizeReducer: FontSizeReducer,
    CRUDProdReducer: CRUDProdReducer,
  },
});
