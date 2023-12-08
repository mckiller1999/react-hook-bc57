import React from "react";
import FormProduct from "./FormProduct";
import { useDispatch, useSelector } from "react-redux";

const CRUDProduct = () => {
  const { arrProd, prodInfo } = useSelector((state) => state.CRUDProdReducer);
  return (
    <div className="container">
      <h3>Product management</h3>
      <FormProduct />
      <div className="table-responsive">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {arrProd.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
            {/*  */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRUDProduct;
