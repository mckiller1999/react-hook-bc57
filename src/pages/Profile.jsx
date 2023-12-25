// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProfileApiAction } from "../redux/reducers/UserReducer";

// const Profile = () => {
//   const { userProFile } = useSelector((state) => state.userReducer);
//   const dispatch = useDispatch();

//   const getProFileAPI = async () => {
//     const action = getProfileApiAction();
//     dispatch(action);
//     //console.log(res);
//   };
//   useEffect(() => {
//     getProFileAPI();
//   }, []);
//   return (
//     <div className="container">
//       <div className="row mt-5">
//         <div className="col-4">
//           {/* <img src={userProFile} alt="" width={200} height={200} />
//           <h3>Name: {userProFile.email}</h3> */}
//         </div>
//         <div className="col-8"></div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApiAction } from "../redux/reducers/UserReducer";

const Profile = () => {
  // const [userProfile,setUserProfile] = useState({});
  const { userProfile } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const getProfileApi = async () => {
    //dispatch logic gọi api từ action async (userReducer)
    const action = getProfileApiAction();
    dispatch(action);
  };

  useEffect(() => {
    //call api get profile
    getProfileApi();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4">
          <img src={userProfile.avatar} alt="..." width={300} />
          <h3>Name: {userProfile.name}</h3>
          <h3>Email: {userProfile.email}</h3>
        </div>
        <div className="col-8"></div>
      </div>
    </div>
  );
};

export default Profile;
