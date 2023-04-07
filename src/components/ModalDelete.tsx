import { ModalOptionsProps } from "../types/types";
import { useAppDispatch } from "../hooks/hooks";
import { deleteComment, deleteReply } from "../redux/slices/commentSlice";

function ModalDelete(props: ModalOptionsProps) {
    const dispatch = useAppDispatch();
    const index = props.currentIndex;
    const commentIndex = (props.parentIndex !== null && props.parentIndex !== undefined) ? props.parentIndex : -1;
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

export default ModalDelete;