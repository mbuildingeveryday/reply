import React from "react";
import CommentInputLine from "../components/CommentInputLine";
import CommentList from "../components/CommentList";

function CommentScreen() {
    return (
        <div className="comment">
            <CommentList className="comment-list" />
            <CommentInputLine className="input-line" />
        </div>
    )
}

export default CommentScreen;