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