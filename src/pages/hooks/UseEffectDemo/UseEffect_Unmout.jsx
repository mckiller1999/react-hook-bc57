import React, { useEffect } from "react";

const UseEffect_Unmout = () => {
  useEffect(() => {
    const timeout = setInterval(() => {
      console.log("useEffect_Unmount");
    }, 1000);
    return () => {
      //return trong bất ký các useeffect nào cũng sẽ kích hoạt khi component đó mất khỏi giao diện
      clearInterval(timeout);
    };
  });
  return <div>UseEffect_Unmount</div>;
};

export default UseEffect_Unmout;
