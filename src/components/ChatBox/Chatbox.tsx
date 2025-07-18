"use client";
import styles from "./ChatBox.module.css";
import { useEffect, useMemo, useState } from "react";
import * as signalR from '@microsoft/signalr';
import { Button, TextField } from "@mui/material"
import { storageKeys } from "@/configs/storageKeys";
import { paths } from "@/configs/paths";
import { urls } from "@/configs/api";
import { useRouter } from 'next/navigation';

type User = {
    userName: string,
    connectionId: string
}

export default function ChatBox() {

    const [message, setMessage] = useState<string>("");
    const [currentUser, setCurrentUser] = useState<User>();
    const [targetConnectionId, setTargetConnectionId] = useState("");
    const [messageReceivedList, setMessageReceivedList] = useState<string[]>([]);
    const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem(storageKeys.accessToken));


    const router = useRouter();



    const connection = useMemo(() => {
        if(typeof window === "undefined" || !accessToken) return;
        const storageToken = sessionStorage.getItem(storageKeys.accessToken);
        if (accessToken == undefined || accessToken == null || accessToken == "") {
            router.push(paths.login);
            return;
        }
        
        setAccessToken(accessToken);
        console.log(accessToken)
        let connection = new signalR.HubConnectionBuilder()
            .withUrl(`${urls.baseUrl}/chatHub`, { accessTokenFactory: () => accessToken })
            .build();

        connection.on("ReceiveMessage", (message) => {
            console.log(message);
            setMessageReceivedList(prev => [...prev, message]);
        });


        connection.on("ReceiveRegister", (currentUser) => {
            console.log("welcome to chat your connectionId is: ", currentUser);
            setCurrentUser(currentUser);
        });


        connection.on("ClientsUpdated", (onlineUsers) => {
            console.log("user list: ", onlineUsers);
            setOnlineUsers(onlineUsers);
        });

        connection.start()
            .then(() => console.log("connection started"));

        return connection;
    }, [accessToken]);

    const onSendHandler = () => {
        console.log("send message to connection id: ", targetConnectionId)
        if (connection == undefined) {
            return;
        }
        connection.invoke("SendMessage", message, targetConnectionId)
            .catch(function (err) {
                return console.error(err.toString());
            });
    }

    const onTargetConnectionIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTargetConnectionId(e.target.value);
    }


    const messageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    return (
        <div className={styles.Container}>
            <h2>your username: {currentUser?.userName}</h2>
            <h2>your connection id: {currentUser?.connectionId}</h2>
            <div className={styles.ChatContainer}>
                <TextField
                    onChange={messageChangeHandler}
                    placeholder="type your message"
                    label="message"
                    size="small"
                />
                <TextField
                    onChange={onTargetConnectionIdChange}
                    label="connection id to send"
                    size="small"
                    className={styles.ConnectionIdInput}
                />
                <Button onClick={onSendHandler} variant="contained">Send</Button>
            </div>
            <br />
            <div className={styles.MessageReceivedContainer}>
                <h2>Message Received: </h2>
                {messageReceivedList.map((messageReceived, index) => {
                    return (
                        <div key={index}>
                            <div>{index + 1}- {messageReceived}</div>
                        </div>
                    )
                })}
            </div>
            <br />
            <div className={styles.ListOfAllUserRegisterd}>
                <h2>User List: </h2>
                {onlineUsers.map((user, index) => {
                    return (
                        <div key={index}>
                            <div>{index + 1}- {user.userName} - {user.connectionId}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
