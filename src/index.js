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

          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
