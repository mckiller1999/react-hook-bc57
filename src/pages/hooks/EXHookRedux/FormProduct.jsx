import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemAction,
  handleInputProductAction,
} from "../../../redux/reducers/CRUDProdReducer";

const FormProduct = () => {
  const { prodInfo } = useSelector((state) => state.CRUDProdReducer);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { id, value } = e.target;
    const action = handleInputProductAction({ id, value });
    dispatch(action);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = prodInfo.value;
    const action = addItemAction(payload);
    dispatch(action);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card">
        <h3 className="card-header">Product info</h3>
        <div className="card-body">
          <div className="form-group">
            <p>id</p>
            <input
              className="form-control"
              id="id"
              value={prodInfo.value.id}
              onChange={handleChange}
            />
            <p className="text-danger"></p>
          </div>
          <div className="form-group">
            <p>name</p>
            <input
              className="form-control"
              id="name"
              value={prodInfo.value.name}
              onChange={handleChange}
            />
            <p className="text-danger"></p>
          </div>
          <div className="form-group">
            <p>price</p>
            <input
              className="form-control"
              value={prodInfo.value.price}
              id="price"
              onChange={handleChange}
            />
            <p className="text-danger"></p>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">
            Add product
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormProduct;
