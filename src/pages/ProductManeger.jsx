import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import axios from "axios";

import { NavLink } from "react-router-dom";
import {
  getAllProductApi,
  getAllProductApiAction,
  getAllProductAsyncAction,
  setArrprod,
} from "../redux/reducers/ProductReducer";

const ProductManeger = () => {
  //dữ liệu component
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const { arrProduct } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  const getAllProduct = async () => {
    // const res = await axios({
    //   url: "https://shop.cyberlearn.vn/api/Product",
    //   method: "GET",
    // });
    // const action = setArrprod(res.data.content);
    /**
     * action-thường:(type:payload...)
     * action-thunk:(dispatc)=> xử lý để có dữ liệu và dùng dispatch đưa lên redux
     */
    //cách 1: create action thunk(tự code)
    const action = getAllProductApiAction();
    dispatch(action);
    //dispatch(getAllProductApiAction); //=> xem bên reducer
    //cách 2: create asynction (thư viện)
    // const action = getAllProductAsyncAction(); //=>xem thêm bên reducer
    // dispatch(action);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  const columns = [
    {
      title: "mã sp",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      //   sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      //   ellipsis: true,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "Adidas",
          value: "Adidas",
        },
        {
          text: "Nike",
          value: "Nike",
        },
      ],
      //   filteredValue: filteredInfo.name || null,
      //   onFilter: (value, record) => record.name.includes(value),
      //   sorter: (a, b) => a.name.length - b.name.length,
      //   sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      //   ellipsis: true,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",

      render: (text, record) => <p>{record.price}$</p>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img style={{ width: 100, height: 100 }} src={record.image} alt="img" />
      ),
    },
    {
      title: "size",
      dataIndex: "size",
      key: "size",
      render: function (text, record) {
        const sizes = JSON.parse(text);
        return (
          <div>
            {sizes.map((number) => {
              return <NavLink className=" mx-1">{number}</NavLink>;
            })}
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => {
        return (
          <div>
            <NavLink to={`/detail/${record.id}`}>view detail</NavLink>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container">
      <div className="container">
        <h3>Product Mangenment</h3>

        <Table
          columns={columns}
          dataSource={arrProduct}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ProductManeger;
