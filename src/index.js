import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home";
//cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UseStateDemo from "./pages/hooks/UseStateDemo";
import ChangeProfile from "./pages/hooks/ExUseState/ChangeProfile";
import UseEffect_Didmount from "./pages/hooks/UseEffectDemo/UseEffect_Didmount";
import UseEffect_DidUpdate from "./pages/hooks/UseEffectDemo/UseEffect_DidUpdate";
import UseEffect_Unmout from "./pages/hooks/UseEffectDemo/UseEffect_Unmout";
import ExChatDemo from "./pages/hooks/EXHookRedux/ExChatDemo";
import FontSize from "./pages/hooks/EXHookRedux/FontSize";
import CRUDProduct from "./pages/hooks/EXHookRedux/CRUDProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="use-state-demo" element={<UseStateDemo />} />
          <Route path="change-profile-use-state" element={<ChangeProfile />} />
          <Route path="use-effect-didmount" element={<UseEffect_Didmount />} />
          <Route
            path="use-effect-didupdate"
            element={<UseEffect_DidUpdate />}
          />
          <Route path="use-effect-unmout" element={<UseEffect_Unmout />} />
          <Route path="redux-hook-chat-demo" element={<ExChatDemo />} />
          <Route path="redux-hook-change-fontsize" element={<FontSize />} />
          <Route path="redux-hook-form" element={<CRUDProduct />} />

          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
