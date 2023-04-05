import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { CommentInputLineProps } from "../types/types";
import { addComment } from "../redux/slices/commentSlice";

function CommentInputLine(props: CommentInputLineProps) {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.name);
    const className = props.className;
    const [inputText, setInputText] = useState<string>();

    return (
        <div className={className}>
            <img className={`${className}__profile-img`} src="images/default_profile.png" />
            <input autoFocus value={inputText} onChange={(e) => setInputText(e.target.value)} className={`${className}__input`} />
            <button
                onClick={() => {
                    dispatch(addComment({ user, comment: inputText }));
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



