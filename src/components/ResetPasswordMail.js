import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const ResetPasswordMail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState("");
  const sendmail = () => {
    if (email) {
      axios
        .post("http://localhost:9003/resetasswordmail", {
          email: email,
        })
        .then(
          (res) => {
            if (res.status === 200) {
              setMsg("Please check your mail");
            } else {
              setMsg("Please wait.....");
            }
          },
          (err) => {
            console.log("have some error", err);
            setMsg("Please enter your registered email");
          }
        );
    } else {
      alert("Please enter mail");
    }
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          flexDirection: "column",
        }}
      >
        <h2>Reset password</h2>
        <Typography>
          please enter your registerd mail for reset password.
        </Typography>
        <Grid xs={2} md={2} spacing={2} mt={5}>
          <TextField
            label="Enter mail"
            value={email}
            onChange={(e) => {
              console.log(email);
              setEmail(e.target.value);
            }}
          ></TextField>
        </Grid>
        <Button
          onClick={sendmail}
          variant="contained"
          sx={{ marginTop: "2vh" }}
        >
          Send mail
        </Button>
        <Typography>{msg}</Typography>

        <Button onClick={() => navigate("/")} sx={{ marginTop: "2vh" }}>
          Back to login
        </Button>
      </Box>
    </div>
  );
};
