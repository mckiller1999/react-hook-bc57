import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const ExHookFormik = () => {
  //tạo hàm lấy value từ form bằng libary formik
  const frmRes = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      fullname: yup.string().required("fullname cannot be blank!"),
      phone: yup.string().required("phone cannot be blank!"),
      email: yup
        .string()
        .required("email cannot be blank!")
        .email("email is invalid"),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <form className="container m-5" onSubmit={frmRes.handleSubmit}>
      <h3>Register</h3>
      <div className="form-group">
        <p>Full name:</p>
        <input
          className="form-control"
          id="fullname"
          name="fullname"
          onChange={frmRes.handleChange}
          onBlur={frmRes.handleBlur}
        />
        <p className="text-danger">
          {frmRes.errors.fullname && frmRes.errors.fullname}
        </p>
      </div>
      <div className="form-group">
        <p>Phone:</p>
        <input
          className="form-control"
          id="phone"
          name="phone"
          onChange={frmRes.handleChange}
          onBlur={frmRes.handleBlur}
        />
        <p className="text-danger">
          {frmRes.errors.phone && frmRes.errors.phone}
        </p>
      </div>
      <div className="form-group">
        <p>Email:</p>
        <input
          className="form-control"
          id="email"
          name="email"
          onChange={frmRes.handleChange}
          onBlur={frmRes.handleBlur}
        />
        <p className="text-danger">
          {frmRes.errors.email && frmRes.errors.email}
        </p>
      </div>
      <div className="form-group">
        <p>password:</p>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          onChange={frmRes.handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-dark" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default ExHookFormik;
