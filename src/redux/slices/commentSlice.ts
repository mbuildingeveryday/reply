import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../types/types";
import { getLocalStorageData, setLocalStorageData } from "../../utils/storage";
import { COMMENTS_KEY } from "../../constants/constants";

interface typeInitialState {
    data: Comment[]
}

const initialState: typeInitialState = {
    data: getLocalStorageData(COMMENTS_KEY)
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
            setLocalStorageData(COMMENTS_KEY, newData);
            state.data = newData;
        },
        addComment: (state, action) => {
            const user = action.payload.user;
            const comment = action.payload.comment;
            const newData = state.data.concat({ name: user.name, like: false, isOpenReplyInput: false, isReply: false, comment: comment, reply: [] })
            setLocalStorageData(COMMENTS_KEY, newData);
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
            setLocalStorageData(COMMENTS_KEY, newData);
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
            setLocalStorageData(COMMENTS_KEY, newData);
            state.data = newData;
        },
        deleteComment: (state, action) => {
            const commentIndex = action.payload.commentIndex;
            const newData = state.data.filter((value, index) => commentIndex !== index);
            setLocalStorageData(COMMENTS_KEY, newData);
            state.data = newData;
        },
        deleteReply: (state, action) => {
            const commentIndex = action.payload.commentIndex;
            const replyIndex = action.payload.replyIndex;
            const newData = state.data.map((value, index) => {
                if (index === commentIndex) {
                    value.reply.splice(replyIndex, 1);
                }
                return value;
            });
            setLocalStorageData(COMMENTS_KEY, newData);
            state.data = newData;
        }
    }
});

export const { addComment, onClickLikeBtn, addReply, onClickReplyBtn, deleteComment, deleteReply } = commentSlice.actions;
export default commentSlice.reducer;