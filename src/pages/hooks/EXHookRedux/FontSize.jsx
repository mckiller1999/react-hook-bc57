import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plustFz } from "../../../redux/reducers/FontSizeReducer";

const FontSize = () => {
  const { fzDefault } = useSelector((state) => state.FontSizeReducer);

  const dispatch = useDispatch();
  const handleChangeFZ = (size) => {
    const action = plustFz(size);
    dispatch(action);
  };

  return (
    <div className="container">
      <h3>Change font size</h3>
      <p style={{ fontSize: fzDefault }}>helloooooooo</p>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          handleChangeFZ(1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          handleChangeFZ(-1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default FontSize;
