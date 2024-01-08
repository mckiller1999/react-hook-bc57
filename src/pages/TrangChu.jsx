import React from "react";

import { NavLink } from "react-router-dom";
import useGetAPI from "../components/CustomeHook/useGetAPI";

const TrangChu = () => {
  const data = useGetAPI("https://shop.cyberlearn.vn/api/Product");
  const arrProduct = data.content;
  return (
    <div className="container">
      <h3>Trang chủ</h3>

      <div className="row">
        {arrProduct?.map((prod, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div class="card ">
                <img class="card-img-top" src={prod.image} alt={prod.name} />
                <div class="card-body">
                  <h4 class="card-title">{prod.name}</h4>
                  <p class="card-text">{prod.price}</p>
                  <NavLink className="btn btn-dark" to={`/detail/${prod.id}`}>
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrangChu;
