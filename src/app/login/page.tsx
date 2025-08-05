"use client";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { urls } from "@/configs/api";
import { storageKeys } from "@/configs/storageKeys";
import { paths } from "@/configs/paths";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pageState, setPageState] = useState<"initial" | "phoneNumber">(
    "initial"
  );
  const router = useRouter();

  const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const submitHandler = () => {
    axios
      .post(`${urls.baseUrl}/auth/verification-code`, {
        phoneNumber: phoneNumber,
        countryCode: 98,
      })
      .then(function (response) {
        sessionStorage.setItem(storageKeys.verifyToken, response.data.token);
        console.log("before redirect", response.data.token);
        router.push(paths.verifyCode);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {pageState == "initial" && (
        <div
          className="container center h-full flex flex-col justify-around"
          style={{
            margin: "auto",
          }}
        >
          <Typography
            component={"h1"}
            sx={{
              fontSize: "3rem",
              height: "auto",
              textAlign: "center",
              marginTop: "2%",
            }}
          >
            PEYGHOOM
          </Typography>
          <div className="w-[80%] h-2/4 relative " style={{ margin: "auto" }}>
            <Image
              src="/undraw_chatting_2b1g.svg"
              alt="Chat illustration"
              fill
              className="object-contain"
            />
          </div>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            Let&apos;s start the chat!
          </Typography>
          <Typography sx={{ textAlign: "center", opacity: 0.8 }}>
            Connect with friends and family securely and private. Enjoy!
          </Typography>
          <Button
            variant="contained"
            sx={{
              margin: "auto",
              width: "80%",
              display: "flex",
              padding: "8px",
              fontSize: "18px",
              borderRadius: "20px",
              textTransform: "initial",
            }}
            onClick={() => {
              setPageState("phoneNumber");
            }}
          >
            Get started
          </Button>
        </div>
      )}
      {pageState == "phoneNumber" && (
        <>
          <div
            style={{
              marginLeft: "8px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography
              component={"h1"}
              sx={{
                fontSize: "3rem",
                height: "auto",
                textAlign: "left",
                marginTop: "2%",
              }}
            >
              PEYGHOOM
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "left",
              }}
            >
              Hi! welcome to Peyghoom
            </Typography>
            <Typography sx={{ textAlign: "left", opacity: 0.8 }}>
              Create your account
            </Typography>
            <Box sx={{ margin: "0 8px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "20%",
                }}
              >
                <Box
                  sx={{
                    background: "#323232",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  +98
                </Box>
                <TextField
                  variant="filled"
                  size="small"
                  type="number"
                  onChange={onPhoneNumberChange}
                  sx={{ borderRadius: "20px", flex: 1, marginRight: "10px" }}
                />
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                width: "80%",
                display: "flex",
                padding: "8px",
                fontSize: "18px",
                borderRadius: "20px",
                textTransform: "initial",
                marginTop: "auto",
                mr: "auto",
                ml: "auto",
                mb: "5%",
              }}
              onClick={() => {
                submitHandler();
              }}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default LoginPage;
