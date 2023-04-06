import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { CommentInputLineProps } from "../types/types";
import { addComment, addReply } from "../redux/slices/commentSlice";

function CommentInputLine(props: CommentInputLineProps) {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.user);
    const className = props.className;
    const commentIndex = props.commentIndex;
    const [inputText, setInputText] = useState<string>();

    return (
        <div className={className}>
            <img className={`${className}__profile-img`} src="images/default_profile.png" />
            <input autoFocus value={inputText} onChange={(e) => setInputText(e.target.value)} className={`${className}__input`} />
            <button
                onClick={() => {
                    (commentIndex !== null && commentIndex !== undefined) ? dispatch(addReply({ comment: inputText, user, commentIndex })) : dispatch(addComment({ comment: inputText, user }));
                    setInputText("");
                }}
                className={`${className}__send-btn`}
            >
                댓글
            </button>
        </div>
    )
}

export default CommentInputLine;



