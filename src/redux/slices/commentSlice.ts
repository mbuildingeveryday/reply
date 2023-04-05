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

    }
});

export default commentSlice.reducer;