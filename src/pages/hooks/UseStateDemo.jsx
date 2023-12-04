import React, { useState } from "react";

const UseStateDemo = () => {
  const [number, setNumber] = useState(1);
  const [state, setState] = useState({ like: 1, view: 1 });

  return (
    <div className="container">
      <h3>Number:{number}</h3>

      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-danger ms-2"
        onClick={() => {
          setNumber(number - 1);
          if (number === 1) {
            setNumber(1);
            return setNumber;
          }
        }}
      >
        -
      </button>
      <hr />
      <h3>
        like:{state.like} - View: {state.view}
      </h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          setState({ ...state, like: state.like + 1 });
        }}
      >
        like
      </button>
      <button
        className="btn btn-success mx-2"
        onClick={() => {
          setState({ ...state, view: state.view + 1 });
        }}
      >
        View
      </button>
    </div>
  );
};

export default UseStateDemo;
