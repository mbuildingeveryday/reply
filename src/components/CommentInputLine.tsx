import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { CommentInputLineProps } from "../types/types";
import { addComment, addReply } from "../redux/slices/commentSlice";

function CommentInputLine(props: CommentInputLineProps) {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.user);
    const className = props.className;
    const commentIndex = props.commentIndex;
    const [inputText, setInputText] = useState<string>('');

    const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputText.length > 0) {
            if (e.key === 'Enter') {
                commentIndex !== null && commentIndex !== undefined ? dispatch(addReply({ user, comment: inputText, commentIndex })) : dispatch(addComment({ user, comment: inputText }));
                setInputText("");
            }
        }
    }

    return (
        <div className={className}>
            <img className={`${className}__profile-img`} src="images/default_profile.png" />
            <input autoFocus value={inputText} onKeyUp={handlePressEnter} onChange={(e) => setInputText(e.target.value)} className={`${className}__input`} />
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



