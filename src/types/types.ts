export interface Comment {
    name: string,
    comment: string
    like: boolean
    isReply: boolean
    isOpenReplyInput: boolean
    reply: Comment[]
}

export interface User {
    name: string
}

export interface CommentInputLineProps {
    className: string
    commentIndex?: number
}

export interface CommentListProps {
    className: string
}

export interface CommentListItemProps {
    className: string
    currentIndex: number
    parentIndex?: number
    comment: Comment
}

export interface LikeProps {
    like: boolean
}

export interface ModalOptionsProps {
    currentIndex: number
    position: { x: number, y: number }
    display: boolean
    comment: Comment
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>
    parentIndex?: number
}