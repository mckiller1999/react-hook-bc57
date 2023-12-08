import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUserComentAction,
  updateUserCommentAction,
} from "../../../redux/reducers/ChatReducer";
const ExChatDemo = () => {
  const { userComment, arrComent } = useSelector((state) => state.ChatReducer);
  //   console.log(userComment);
  //   console.log(arrComent);

  //sử dụng hook useDispatch thay cho this.props.dispatch

  const dispatch = useDispatch();
  const handleChangeValue = (e) => {
    const { id, value } = e.target;
    //console.log(id);
    //console.log(value);
    const action = updateUserCommentAction({
      id: id,
      value: value,
    });
    dispatch(action);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = userComment;
    const action = addUserComentAction(payload);
    dispatch(action);
  };

  return (
    <div className="container">
      <h3>demo chat</h3>
      <div className="card">
        <div className="card-header">
          {arrComent.map((content, index) => {
            return (
              <div key={index} className="d-flex">
                <div style={{ width: "10%" }}>
                  <h5 className="text text-danger">{content.name}</h5>
                  <img
                    src={`https://i.pravatar.cc?u=${content.name}`}
                    alt="..."
                    style={{ width: 50 }}
                  />
                </div>
                <div style={{ width: "90%" }}>
                  <p>{content.content}</p>
                </div>
              </div>
            );
          })}
          {/* */}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h3>name</h3>
              <input
                className="form-control"
                id="name"
                value={userComment.name}
                onInput={handleChangeValue}
              />
            </div>
            <div className="form-group">
              <h3>content</h3>
              <input
                className="form-control"
                id="content"
                value={userComment.content}
                onInput={handleChangeValue}
              />
            </div>
            <div className="form-group my-2">
              <button className="btn btn-primary" type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExChatDemo;
