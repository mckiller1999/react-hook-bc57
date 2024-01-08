import React from "react";
import { NavLink } from "react-router-dom";

const BottomTab = () => {
  return (
    <div
      className="bg-dark text-white d-flex justify-content-around p-3 text-center "
      style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}
    >
      <div>
        <NavLink to={"/"}>
          <i className="fa fa-home"></i>
          <h3>Home</h3>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/login-demo"}>
          <i className="fa fa-users"></i>
          <h3>Login</h3>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/"}>
          <i className="fa fa-cart-plus"></i>
          <h3>Cart</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomTab;
