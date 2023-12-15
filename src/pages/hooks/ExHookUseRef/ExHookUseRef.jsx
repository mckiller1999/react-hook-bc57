import React, { useRef, useState } from "react";
import ChildComponent from "./ChildComponent";
//thường đc dùng để lưu trữ các 'giá trị' sau mỗi lần render lại (setState,dispath redux) thường dùng trong form
const ExHookUseRef = () => {
  //   const [userLogin, setuserLogin] = useState({
  //     username: "",
  //     password: "",
  //   });
  const [like, setLike] = useState(1);
  const refLogin = useRef({
    username: "",
    password: "",
  });
  //dom bằng ref
  const refdom = useRef();
  //dom qua component khác bằng ref (cách này chỉ dùng cho class component )
  const refdomChildComponent = useRef();
  const handleChange = (e) => {
    const { id, value } = e.target;
    // setuserLogin({
    //   ...userLogin,
    //   [id]: value,
    // });
    refLogin.current[id] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refLogin.current);
    //ngoài ra ref cũng dùng để dom đến các thẻ tuy nhiên ta có thể quản lý dễ dàng thông qua biến ref trên component đó
    refdom.current.disabled = "true";
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input
          className="form-control"
          name="username"
          id="username"
          onInput={handleChange}
        />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          name="password"
          id="password"
          type="password"
          onInput={handleChange}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-success"
          //sử dụng ref dom bằng thẻ ref
          ref={refdom}
        >
          Login
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          like: {like}
        </button>
      </div>
      <ChildComponent ref={refdomChildComponent} />
      <button
        onClick={() => {
          let state = refdomChildComponent.current.state;
          console.log(
            refdomChildComponent.current.setState({ number: state.number + 1 })
          );
        }}
      >
        GetElement component
      </button>
    </form>
  );
};

export default ExHookUseRef;
