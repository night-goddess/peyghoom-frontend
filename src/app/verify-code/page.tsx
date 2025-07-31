"use client"
import axios from 'axios';
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { urls } from '@/configs/api';
import { storageKeys } from '@/configs/storageKeys';
import { paths } from '@/configs/paths';



const VerifyCodePage = () => {

    const [code, setCode] = useState("");

    const router = useRouter();

    const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value)
        console.log(code);
    }


    const submitHandler = () => {
        const token = sessionStorage.getItem(storageKeys.verifyToken);
        console.log(token, code);
        axios.post(`${urls.baseUrl}/auth/verification-code/verify`, 
         {
            code: code
        },
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        )
            .then(function (response) {
                sessionStorage.setItem(storageKeys.accessToken , response.data.accessToken);
                sessionStorage.setItem(storageKeys.refreshToken , response.data.refreshToken);
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
                    label="code"
                    onChange={onCodeChange}
                    value={code}
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



export default VerifyCodePage;