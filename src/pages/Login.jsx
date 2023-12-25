// import React from "react";
// import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { loginApiAction } from "../redux/reducers/UserReducer";
// const Login = () => {
//   const dispatch = useDispatch;
//   const navigate = useNavigate();
//   const frmLogin = useFormik({
//     initialValues: { email: "", password: "" },

//     onSubmit: async (userLogin) => {
//       const action = loginApiAction(userLogin);
//       dispatch(action);
//     },
//   });

//   return (
//     <div className="container w-50">
//       <form onSubmit={frmLogin.handleSubmit}>
//         <h3>Login</h3>
//         <div className="form-group">
//           <p>email</p>
//           <input
//             className="form-control"
//             id="email"
//             name="email"
//             onChange={frmLogin.handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <p>password</p>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             onChange={frmLogin.handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <button type="submit" className="btn btn-success">
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginApiAction } from "../redux/reducers/UserReducer";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (userLogin) => {
      const action = loginApiAction(userLogin);
      dispatch(action);
    },
  });
  return (
    <form onSubmit={frmLogin.handleSubmit} className="container">
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
          className="form-control"
          id="password"
          name="password"
          onChange={frmLogin.handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success mt-2">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
