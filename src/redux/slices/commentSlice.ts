import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../types/types";

interface typeInitialState {
    data: Comment[]
}

const initialState: typeInitialState = {
    data: [
        { name: "석형", like: false, isReply: false, isOpenReplyInput: false, comment: "테스트1", reply: [] },
        { name: "미도", like: false, isReply: false, isOpenReplyInput: false, comment: "테스트2", reply: [] },
        { name: "영수", like: true, isReply: false, isOpenReplyInput: false, comment: "테스트3", reply: [] },
    ]
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        onClickLikeBtn: (state, action) => {
            const commentIndex = action.payload.commentIndex;
            const newData = state.data.map((value, index) => {
                if (index === commentIndex) {
                    value.like = !value.like;
                }
                return value;
            });
            state.data = newData;
        },
        addComment: (state, action) => {
            const user = action.payload.user;
            const comment = action.payload.comment;
            const newData = state.data.concat({ name: user.name, like: false, isOpenReplyInput: false, isReply: false, comment: comment, reply: [] })
            state.data = newData;
        },
        onClickReplyBtn: (state, action) => {
            const commentIndex = action.payload.commentIndex;
            const newData = state.data.map((value, index) => {
                if (index === commentIndex) {
                    value.isOpenReplyInput = !value.isOpenReplyInput;
                } else {
                    value.isOpenReplyInput = false;
                }
                return value;
            });
            state.data = newData;
        },
        addReply: (state, action) => {
            const user = action.payload.user;
            const commentIndex = action.payload.commentIndex;
            const comment = action.payload.comment;
            const newData = state.data.map((value, index) => {
                if (index === commentIndex) {
                    value.reply.push({ name: user.name, like: false, isOpenReplyInput: false, isReply: true, comment: comment, reply: [] })
                }
                return value;
            });
            state.data = newData;
        },
    }
});

export const { addComment, onClickLikeBtn, addReply, onClickReplyBtn } = commentSlice.actions;
export default commentSlice.reducer;