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
    }
});

export const { addComment, onClickLikeBtn } = commentSlice.actions;
export default commentSlice.reducer;