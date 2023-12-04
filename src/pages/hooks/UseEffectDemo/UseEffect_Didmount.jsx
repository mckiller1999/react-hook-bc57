import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffect_Didmount() {
  const [number, setNUmber] = useState(1);
  const [arrProd, setArrProd] = useState([]);

  console.log("render 123");
  useEffect(() => {
    //     console.log("l1: chạy sau khi giao diện render xong l1");
    //     console.log("l2: chạy mỗi lần component render lại");
    console.log(123);
    //setState
    if (arrProd.length === 0) {
      getApiProduct();
    }
  }, []); //sử dụng tham số depedentcy là arr rỗng thì chỉ chạy 1 lần sau render

  const getApiProduct = () => {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "Get",
    });
    promise.then((res) => {
      setArrProd(res.data.content);
    });
  };
  return (
    <div className="container">
      <button
        onClick={() => {
          let promise = axios({
            url: "https://shop.cyberlearn.vn/api/Product",
            method: "Get",
          });
          promise.then((res) => {
            setArrProd(res.data.content);
          });
        }}
      >
        Get Api
      </button>
      <h3>{number}</h3>
      <button
        type=""
        onClick={() => {
          setNUmber(number + 1);
        }}
      >
        +
      </button>
      <h3>Product list</h3>
      <div className="row">
        {arrProd.map((prod) => {
          return (
            <div className="col-md-3" key={prod.id}>
              <div className="card">
                <img src={prod.image} alt="..." />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.price}</p>
                  <button className="btn btn-dark">
                    <i className="fa fa-cart-plus"></i>
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
