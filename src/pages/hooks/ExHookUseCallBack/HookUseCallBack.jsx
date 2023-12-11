import React, { useCallback, useState } from "react";
import Comment from "./Comment";

const HookUseCallBack = () => {
  let [like, setLike] = useState(1);
  let [number, setNumber] = useState(1);

  const renderLike = () => {
    return `like ${like}`;
  };

  const callbackRender = useCallback(renderLike, [like]);
  //khi dependence like thay đổi thì useCallback sẽ cache lại địa chỉ lần thay đổi gần nhất(thường dùng cho việc truyền object khi render lại những trường cần thay đổi thì add vào như vd trên muốn thay đổi like thì add like...)

  return (
    <div className="m-5">
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      <br />
      Like: {like} ♥
      <br />
      <button
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </button>
      <hr />
      <br />
      <Comment renderLike={callbackRender} />
    </div>
  );
};

export default HookUseCallBack;

//khi tính toán 1 giá trị trong  1 hàm thì giá trị bên ngoài truyền vào hàm sẽ ko thay đổi
// đối vs arr khi xử lý thì sẽ làm thay đổi giá trị gốc, vì đã thay đổi 'địa chỉ vùng nhớ'
