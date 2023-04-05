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

export interface CommentListProps {
    className: string
}

export interface CommentListItemProps {
    className: string
    index: number
    comment: Comment
}

export interface LikeProps {
    like: boolean
}