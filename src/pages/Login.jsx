import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const frmLogin = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (userLogin) => {
      console.log(userLogin);
      //xử lý đăng nhập
      if (userLogin.email === "admin" && userLogin.password === "123") {
        navigate("/redux-profile");
      } else {
        alert("Tài khoản hoặc mật khẩu sai");
        navigate("/redux-forgot");
      }
    },
  });

  return (
    <div className="container w-50">
      <form onSubmit={frmLogin.handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <p>email</p>
          <input
            className="form-control"
            id="email"
            name="email"
            onChange={frmLogin.handleChange}
          />
        </div>
        <div className="form-group">
          <p>password</p>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={frmLogin.handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
