import { ModalOptionsProps } from "../types/types";
import { useAppDispatch } from "../hooks/hooks";
import { deleteComment, deleteReply } from "../redux/slices/commentSlice";

function ModalDelete(props: ModalOptionsProps) {
    const dispatch = useAppDispatch();
    const currentIndex = props.currentIndex;
    const parentIndex = props.parentIndex;
    const position = props.position;
    const display = props.display;
    const comment = props.comment;
    const setDisplay = props.setDisplay;

    return (
        <div className="modal-option" style={{ position: 'absolute', display: display ? 'block' : 'none', left: position.x, top: position.y }}>
            <button onClick={(e) => {
                comment.isReply ? dispatch(deleteReply({ commentIndex: parentIndex, replyIndex: currentIndex })) : dispatch(deleteComment({ commentIndex: currentIndex }));
                setDisplay(false);
            }} className="modal-option__btn">
                삭제
            </button>
        </div>
    )
}

export default ModalDelete;