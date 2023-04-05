import React from "react";
import { CommentListItemProps } from "../types/types";
import Like from "./Like";

function CommentListItem(props: CommentListItemProps) {
    const className = props.className;
    const index = props.index;
    const comment = props.comment;

    return (
        <li className={className}>
            <div className={`${className}-main`}>
                <p className={`${className}-main-title`}>{comment.name}</p>
                <p className={`${className}-main-des`}>{comment.comment}</p>
                <div className={`${className}-main-btns`}>
                    <div>
                        <button onClick={() => {}} className={comment.like ? `${className}-like-btn--liked` : `${className}-like-btn`}>like</button>
                        <button onClick={() => {}} className={`${className}-reply-btn`}>reply</button>
                    </div>
                    <Like like={comment.like} />
                </div>
            </div>
        </li>
    )
}

export default CommentListItem;