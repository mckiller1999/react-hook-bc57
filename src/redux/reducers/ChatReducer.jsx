import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrComent: [
    { name: "abc", content: "helloooo" },
    { name: "abc1", content: "helloooo1" },
  ],
  userComment: {
    name: "",
    content: "",
  },
};

const ChatReducer = createSlice({
  name: "ChatReducer",
  initialState,
  reducers: {
    updateUserCommentAction: (state, action) => {
      const { id, value } = action.payload;
      state.userComment[id] = value;
    },
    addUserComentAction: (state, action) => {
      state.arrComent.push(action.payload);
    },
  },
});

export const { updateUserCommentAction, addUserComentAction } =
  ChatReducer.actions;

export default ChatReducer.reducer;
