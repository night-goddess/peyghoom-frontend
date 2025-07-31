import { Chat, Message } from "@/types/Messenger"



export const ChatElement = (props: { message: Message[] }) => {
    return (
        <div>
            { props.message.map((m, i) => (<h2 key={i}>{m.text}</h2>)) }
        </div>
    )
}