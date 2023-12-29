import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [arrProduct, setarrProduct] = useState([]);
  console.log(arrProduct);
  const getAllProduct = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    setarrProduct(res.data.content);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="container">
      <h3>Home</h3>
      <div className="row">
        {arrProduct.map((prod, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card ">
                <img
                  className="card-img-top"
                  src={prod.image}
                  alt={prod.name}
                />
                <div className="card-body">
                  <h4 className="card-title">{prod.name}</h4>
                  <p className="card-text">{prod.price}</p>
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

export default Home;
