"use client"
import axios from 'axios';
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { urls } from '@/configs/api';
import { storageKeys } from '@/configs/storageKeys';
import { paths } from '@/configs/paths';
import { useRouter } from 'next/navigation';



const LoginPage = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }


    const submitHandler = () => {
        axios.post(`${urls.baseUrl}/api/auth/login`, {
            username: username,
            password: password
        })
            .then(function (response) {
                sessionStorage.setItem(storageKeys.accessToken , response.data.data.accessToken);
                console.log("before redirect")
                router.push(paths.chat);
            })
            .catch(function (error) {
                console.log(error);
            });
    }




    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                border: "1px black solid",
                height: "500px",
                width: "450px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TextField
                    label="username"
                    onChange={onUserNameChange}
                    value={username}
                />
                <TextField
                    label="password"
                    onChange={onPasswordChange}
                    value={password}
                />

                <Button
                    onClick={submitHandler}
                    variant="contained"
                    style={{ width: "200px" }}
                >Submit</Button>
            </div>
        </div>
    )
}



export default LoginPage;