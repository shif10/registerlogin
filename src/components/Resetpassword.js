import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Resetpassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  let { id } = useParams();
  //   const handlechange = (e) => {
  //     const { name, value } = e.target;
  //     setEmail({ ...email, [name]: value });
  //   };
  const resetpasswd = (req, res) => {
    try {
      axios
        .post("http://localhost:9003/resetpassword", {
          password: password,
          id: id,
        })
        .then(
          (res) => {
            if (res.status === 200) {
              navigate("/signin");
            }
          },
          (err) => {
            console.log("error is", err);
          }
        );
    } catch (err) {
      console.log(err);
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
        <h3>Reset password</h3>
        <Typography>please enter your new password</Typography>
        <Grid xs={2} md={2} spacing={2} mt={5}>
          <TextField
            label="Enter mail"
            value={password}
            required
            onChange={(e) => {
              console.log(password);
              setPassword(e.target.value);
            }}
          ></TextField>
        </Grid>
        <Button
          variant="contained"
          onClick={resetpasswd}
          sx={{ marginTop: "5vh" }}
        >
          Resetpassword
        </Button>
      </Box>
    </div>
  );
};
