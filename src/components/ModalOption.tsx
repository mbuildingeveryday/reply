import React from "react";
import { Comment, ModalOptionsProps } from "../types/types";
import { useAppDispatch } from "../hooks/hooks";
import { deleteComment, deleteReply } from "../redux/slices/commentSlice";

function ModalOption(props: ModalOptionsProps) {
    const dispatch = useAppDispatch();
    const index = props.index;
    const commentIndex = (props.commentIndex !== null && props.commentIndex !== undefined) ? props.commentIndex : -1;
    const position = props.position;
    const display = props.display;
    const comment = props.comment;
    const setDisplay = props.setDisplay;

    return (
        <div className="modal-option" style={{ position: 'absolute', display: display ? 'block' : 'none', left: position.x, top: position.y }}>
            <button onClick={(e) => {
                comment.isReply ? dispatch(deleteReply({ commentIndex: commentIndex, replyIndex: index })) : dispatch(deleteComment({ commentIndex: index }));
                setDisplay(false);
            }} className="modal-option__btn">
                삭제
            </button>
        </div>
    )
}

export default ModalOption;