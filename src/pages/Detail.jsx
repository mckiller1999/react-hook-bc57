import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [productDetail, setProductDetail] = useState({});

  //lấy giá trị từ thanh url thông qua param trên thẻ router
  const params = useParams();

  const getProdById = async () => {
    console.log(params.id);
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
      method: "GET",
    });
    setProductDetail(res.data.content);
  };
  useEffect(() => {
    getProdById();
    console.log(productDetail);
    //gọi api
  }, [params.id]);
  return (
    <div className="container">
      <h3>Detail</h3>
      <p>param:{params.id}</p>
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} alt="" width={250} height={250} />
        </div>
        <div className="col-4 ">
          <h3>{productDetail.name}</h3>
          <p>des: {productDetail.shortDescription}</p>
          <button className="btn btn-success">add to cart</button>
        </div>
        <h3 className="text-center">Related Product</h3>
        <div className="row">
          {productDetail.relatedProducts?.map((prod, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card" key={index}>
                  <img className="card-img-top" src={prod.image} alt="" />
                  <div className="card-body">
                    <h3>{prod.name}</h3>
                    <p>{prod.price}</p>
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
    </div>
  );
};

export default Detail;
