import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from "./reducers/ChatReducer";

import FontSizeReducer from "./reducers/FontSizeReducer";
import CRUDProdReducer from "./reducers/CRUDProdReducer";
import ProductReducer from "./reducers/ProductReducer";
import UserReducer from "./reducers/UserReducer";
import DrawerReducer from "./reducers/DrawerReducer";
export const store = configureStore({
  reducer: {
    //các state của ứng dụng
    ChatReducer: ChatReducer,
    FontSizeReducer: FontSizeReducer,
    CRUDProdReducer: CRUDProdReducer,
    ProductReducer,
    userReducer: UserReducer,
    drawerReducer: DrawerReducer,
  },
});
