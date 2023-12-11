import React, { memo } from "react";
//memo giúp cho component ko render lại khi ko cần thiết
//props thay đổi thì mới render lại
//nếu sử dụng memo chỉ là shallow compare (so sánh nông (1 cấp)) đối vs object thì khi setState ở component cha thì phải {...} [...](clone dữ liệu từ component cha) hoặc cloneDeep(lodash)
const Comment = (props) => {
  console.log("child component comment");
  //console.log(props);
  return (
    <div className="bg-dark text-white p-5">
      <h3>Like (child Component): {props.renderLike()}</h3>
      Comment
    </div>
  );
};

export default memo(Comment);
