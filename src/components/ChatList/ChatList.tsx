import { Chat } from "@/types/Messenger";
import { ChatElement } from "../ChatElement/ChatElement";




export const ChatList = (props: { chat: Chat[] }) => {
    return (
        <div style={{ border: "1px black solid" , margin: "10px" }}>
            { props.chat.map(c => (<ChatElement key={c.userId.timestamp} message={c.messages} />)) }
        </div>
    )
}