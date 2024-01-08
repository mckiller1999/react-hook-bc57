import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleDrawerAction,
  updateContentDrawer,
} from "../../redux/reducers/DrawerReducer";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const DemoTestDrawer = () => {
  const dispatch = useDispatch();
  const onOpenLogin = () => {
    const action = updateContentDrawer(<Login />);
    dispatch(action);
  };
  const onOpenRegister = () => {
    const action = updateContentDrawer(<Register />);
    dispatch(action);
  };
  return (
    <div className="container">
      <button className="btn btn-success" onClick={onOpenLogin}>
        Login
      </button>
      <button className="btn btn-danger mx-3" onClick={onOpenRegister}>
        Register
      </button>
    </div>
  );
};

export default DemoTestDrawer;
