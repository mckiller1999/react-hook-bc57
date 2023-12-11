import React from "react";
import FormProduct from "./FormProduct";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemAction } from "../../../redux/reducers/CRUDProdReducer";

const CRUDProduct = () => {
  const { arrProd } = useSelector((state) => state.CRUDProdReducer);
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    const action = deleteItemAction({ index });
    dispatch(action);
  };
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arrProd.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      Xóa
                    </button>
                    <button className="btn btn-primary mx-2">Sửa</button>
                  </td>
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
