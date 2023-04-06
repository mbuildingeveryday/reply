import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { onClickLikeBtn, onClickReplyBtn } from "../redux/slices/commentSlice";
import { CommentListItemProps } from "../types/types";
import CommentInputLine from "./CommentInputLine";
import Like from "./Like";

function CommentListItem(props: CommentListItemProps) {
    const dispatch = useAppDispatch();
    const className = props.className;
    const index = props.index;
    const comment = props.comment;

    const renderReplies = () => {
        return (
            <ul className={"comment-list"}>
                {comment.reply.map((value, replyIndex) => <CommentListItem key={replyIndex + value.comment.slice(0, 5)} index={replyIndex} className={`comment-list__li`} comment={value} />)}
            </ul>
        )
    }

    const renderReplyInput = () => {
        return (
            <CommentInputLine className="input-line" commentIndex={index} />
        )
    }

    return (
        <li className={`${className}${comment.isReply ? "--reply" : ""}`}>
            <div className={`${className}-main`}>
                <p className={`${className}-main-title`}>{comment.name}</p>
                <p className={`${className}-main-des`}>{comment.comment}</p>
                {!comment.isReply ?
                    <div className={`${className}-main-btns`}>
                        <div>
                            <button onClick={() => { dispatch(onClickLikeBtn({ commentIndex: index })) }} className={comment.like ? `${className}-like-btn--liked` : `${className}-like-btn`}>like</button>
                            <button onClick={() => { dispatch(onClickReplyBtn({ commentIndex: index })) }} className={`${className}-reply-btn`}>reply</button>
                        </div>
                        <Like like={comment.like} />
                    </div>
                    : <></>}
            </div>
            {comment.reply.length > 0 ? renderReplies() : <></>}
            {comment.isOpenReplyInput ? renderReplyInput() : <></>}
        </li>
    )
}

export default CommentListItem;