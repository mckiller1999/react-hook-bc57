import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import axios from "axios";

//gõ text đưa lên url(setSearchParams)
//get từ url => về component gọi api(searchParams.get('key'))
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProduct, setarrProduct] = useState([]);
  const tukhoa = searchParams.get("keyword");
  console.log(arrProduct);
  const formSearch = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: ({ keyword }) => {
      console.log(keyword);
      setSearchParams({
        keyword: keyword,
      });
    },
  });
  const getProdByKeyword = async () => {
    //call api
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${tukhoa}`,
      method: "GET",
    });
    setarrProduct(res.data.content);
  };

  useEffect(() => {
    // if (tukhoa === "") {
    //   tukhoa = searchParams.get("keyword");
    // }
    getProdByKeyword();
  }, [tukhoa]);
  return (
    <div className="container">
      <form className="frm-search" onSubmit={formSearch.handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-button btn btn-success" type="submit">
            Search
          </span>
          <div className="form-floating">
            <input
              value={tukhoa}
              type="text"
              className="form-control"
              id="keyword"
              placeholder="keyword"
              name="keyword"
              onChange={formSearch.handleChange}
            />
            <label htmlFor="keyword">search</label>
          </div>
        </div>
      </form>
      <h3>Search</h3>
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

export default Search;
