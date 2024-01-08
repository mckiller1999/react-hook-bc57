import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateOnOkAction } from "../redux/reducers/DrawerReducer";

const Register = () => {
  const frmRegister = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
    },
    onSubmit: async (userRer) => {
      // const action = loginApiAction(userLogin);
      // dispatch(action);
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const action = updateOnOkAction(frmRegister.handleSubmit);
    dispatch(action);
  }, []);
  return (
    <form className="container" onSubmit={frmRegister.handleSubmit}>
      <h3>Register</h3>
      <div className="form-group">
        <p>email</p>
        <input
          className="form-control"
          id="email"
          name="email"
          onChange={frmRegister.handleChange}
        />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          onChange={frmRegister.handleChange}
        />
      </div>
      <div className="form-group">
        <p>name</p>
        <input
          className="form-control"
          id="name"
          name="name"
          onChange={frmRegister.handleChange}
        />
      </div>
      <div className="form-group">
        <p>phone</p>
        <input
          className="form-control"
          id="phone"
          name="phone"
          onChange={frmRegister.handleChange}
        />
      </div>
      <div className="form-group">
        <p>gender</p>
        <select className="form-select">
          <option value="">male</option>
          <option value="">female</option>
        </select>
      </div>
      <div className="form-group mt-2">
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
