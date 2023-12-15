import React, { useState } from "react";
import { Rate } from "antd";

const AntDemo = () => {
  let [state, setState] = useState(1);
  return (
    <div className="container">
      <h3 className="text-center">Ant des demo</h3>
      Điểm: {state}
      <br />
      <Rate
        allowHalf
        Value={state}
        onChange={(value) => {
          setState(value);
        }}
      />
    </div>
  );
};

export default AntDemo;
