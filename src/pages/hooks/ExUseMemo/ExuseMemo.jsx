import React, { useMemo, useState } from "react";
import Cart from "./Cart";
let cart = [
  { id: 1, name: "iphone", price: 1000 },
  { id: 2, name: "htc phone", price: 2000 },
  { id: 3, name: "lg phone", price: 3000 },
];
export default function ExuseMemo(props) {
  let [like, setLike] = useState(1);
  // let cart = [
  //   { id: 1, name: "iphone", price: 1000 },
  //   { id: 2, name: "htc phone", price: 2000 },
  //   { id: 3, name: "lg phone", price: 3000 },
  // ];
  // /const cartMemo = useMemo(() => cart, []);
  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Cart cart={cart} />
    </div>
  );
}

//useMemo tương tự như callback sử dụng khi ko muốn cache lại, nhưng ít dùng, thường những thứ ko cần cache lại thì sẽ để ngoài function chính của component
