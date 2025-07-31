export type User = {
    userName: string,
    connectionId: string
}

type ObjectId = {
    timestamp: number,
    creationTime: string,
}

export type Chat = {
    unReadCount: number;
    messages: Message[],
    userId: ObjectId
}

export type Message = {
    createAt: string,
    received: boolean,
    receiverUserId: ObjectId,
    senderUserId: ObjectId,
    text: string,
}