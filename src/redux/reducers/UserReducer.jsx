// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// let userLoginDefault = {
//   email: "",
//   accessToken: "",
// };
// if (localStorage.getItem("userLogin")) {
//   userLoginDefault = JSON.parse(localStorage.getItem("userLogin"));
// }
// const initialState = {
//   userProfile: {},
//   userLogin: {
//     email: "",
//     accessToken: "",
//   },
// };

// const UserReducer = createSlice({
//   name: "userReducer",
//   initialState,
//   reducers: {
//     loginAction: (state, action) => {
//       state.userLogin = action.payload;
//     },
//   },
// });

// export const { loginAction } = UserReducer.actions;

// export default UserReducer.reducer;

// //----------------action thunk
// export const loginApiAction = (userLogin) => {
//   return async (dispatch) => {
//     //call api
//     const res = await axios({
//       url: "https://shop.cyberlearn.vn/api/Users/signin",
//       method: "POST",
//       data: {
//         email: userLogin.email,
//         password: userLogin.password,
//       },
//     });
//     //Sau khi lấy được token thì lưu vào local storage
//     localStorage.setItem("accessToken", res.data.content.accessToken);
//     //localStorage.setItem("userLogin", JSON.stringify(res.data.content));
//     console.log(res.data.content);
//     const action = loginAction(res.data.content);
//     dispatch(action);
//   };
// };

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TOKEN, USER_LOGIN, http } from "../../pages/Config";

//

//Xử lý load giá trị ban đầu cho state từ storage(localstorage)
let userLoginDefault = {
  email: "",
  accessToken: "",
};
if (localStorage.getItem("userLogin")) {
  userLoginDefault = JSON.parse(localStorage.getItem("userLogin"));
}

const initialState = {
  userProfile: {},
  userLogin: userLoginDefault,
};

const UserReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    getProfileAction: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { loginAction, getProfileAction } = UserReducer.actions;

export default UserReducer.reducer;

//-------------------action thunk-------------------
export const loginApiAction = (userLogin) => {
  return async (dispatch) => {
    //call api
    try {
      const res = await http.post("/Users/singin", userLogin);
      //Sau khi lấy được token thì lưu vào local storage
      localStorage.setItem(TOKEN, res.data.content.accessToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content));
      //Gửi dữ liệu sau khi thành công vào reducer
      const action = loginAction(res.data.content);
      dispatch(action);
    } catch (err) {
      if (err.response?.status === 404) {
        alert("Tài khoản hoặc mật khẩu sai");
        window.location.href = "/";
      }
    }
  };
};

// export const getProfileApiAction = () => {
//   return async (dispatch) => {
//     const res = await axios({
//       url: "https://shop.cyberlearn.vn/api/Users/getProfile",
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     });

//     const action = getProfileAction(res.data.content);
//     dispatch(action);
//   };
// };

export const getProfileApiAction = () => {
  return async (dispatch) => {
    const res = await http.post("/Users/getProfile");
    //Sau khi có được dữ liệu thì dispatch lên reducer
    const action = getProfileAction(res.data.content);
    dispatch(action);
  };
};
