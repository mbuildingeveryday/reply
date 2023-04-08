import React, { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { onClickLikeBtn, onClickReplyBtn } from "../redux/slices/commentSlice";
import { CommentListItemProps } from "../types/types";
import CommentInputLine from "./CommentInputLine";
import ModalDelete from "./ModalDelete";
import Like from "./Like";

function CommentListItem(props: CommentListItemProps) {
    const dispatch = useAppDispatch();
    const className = props.className;
    const currentIndex = props.currentIndex;
    const parentIndex = props.parentIndex;
    const comment = props.comment;
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [displayOption, setDisplayOption] = useState(false);

    const handleOption = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPosition({ x: e.currentTarget.getBoundingClientRect().x - 40, y: e.currentTarget.getBoundingClientRect().y + 20 });
        setDisplayOption(!displayOption);
    }

    const renderReplies = () => {
        return (
            <ul className={"comment-list"}>
                {comment.reply.map((value, replyIndex) => <CommentListItem key={replyIndex + value.comment.slice(0, 5)} parentIndex={currentIndex} currentIndex={replyIndex} className={`comment-list__li`} comment={value} />)}
            </ul>
        )
    }

    const renderReplyInput = () => {
        return (
            <CommentInputLine className="input-line" commentIndex={currentIndex} />
        )
    }

    return (
        <li className={`${className}${comment.isReply ? "--reply" : ""}`}>
            <ModalDelete parentIndex={comment.isReply ? parentIndex : undefined} currentIndex={currentIndex} position={position} display={displayOption} setDisplay={setDisplayOption} comment={comment} />
            <div className={`${className}-main`}>
                <div className={`${className}-main-title-container`}>
                    <span className={`${className}-main-title`}>{comment.name}</span>
                    <button onClick={(e) => { handleOption(e) }} className={`${className}-edit-btn`}>···</button>
                </div>
                <p className={`${className}-main-des`}>{comment.comment}</p>
                {!comment.isReply ?
                    <div className={`${className}-main-btns`}>
                        <div>
                            <button onClick={() => { dispatch(onClickLikeBtn({ index: currentIndex })) }} className={comment.like ? `${className}-like-btn--liked` : `${className}-like-btn`}>like</button>
                            <button onClick={() => { dispatch(onClickReplyBtn({ index: currentIndex })) }} className={`${className}-reply-btn`}>reply</button>
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