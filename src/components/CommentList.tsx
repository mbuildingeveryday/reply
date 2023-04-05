import React from "react";
import { useAppSelector } from "../hooks/hooks";
import { CommentListProps } from "../types/types";
import CommentListItem from "./CommentListItem";

function CommentList(props: CommentListProps) {
    const className = props.className;
    const data = useAppSelector(state => state.comment.data);

    return (
        <div className={`${className}__container`}>
            <ul className={className}>
                {data.map((value, index) => <CommentListItem key={index + value.comment.slice(0, 5)} index={index} className={`${className}__li`} comment={value} />)}
            </ul>
        </div>
    )
}

export default CommentList;