import React, { useState } from "react";

const ChangeProfile = () => {
  const [number, setNumber] = useState(1);

  return (
    <div className="container">
      <div className="card w-25">
        <img src={`https://i.pravatar.cc?u=${number}`} alt="..." />
        <p>id:{number}</p>
        <div className="card-body">
          <button
            className="btn btn-danger"
            onClick={() => {
              setNumber(number - 1);
            }}
          >
            Prev
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              setNumber(Math.random());
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
