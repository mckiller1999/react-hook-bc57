import React, { useState, useEffect } from "react";

const UseEffect_DidUpdate = () => {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);

  useEffect(() => {
    //state nào thay đổi thì hàm này kích hoạt
    //thường dùng cho việc call api theo tham số(vd như các trang detail, edit...)
    console.log("change like");
  }, [like]);

  return (
    <div className="container">
      <h3>like:{like}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like
      </button>
      <h3>number:{number}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseEffect_DidUpdate;
