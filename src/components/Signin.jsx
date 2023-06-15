import React, { useState } from "react";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signin = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log("user", user);
  };
  const login = () => {
    const { email, password } = user;

    axios.post("http://localhost:9003/login", user).then(
      (res) => {
        if (res.status === 200) {
          console.log(res);
          setLoginUser(res.data?.user);
          console.log(res.data?.user.token);
          localStorage.setItem("token", res.data?.user.token);
          navigate("/home");
        } else {
          alert("somthing is wrong");
        }
      },
      (err) => {
        console.log(err);
        alert(err);
      }
    );
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"100%"}
      boxShadow={(0, 0, "12px", "4px", "secondary")}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",

        justifyItems: "center",
        position: "fixed",

        width: "100%",
        height: "100%",
        zIndex: "9999",
      }}
    >
      <Typography variant="h3" mb={4}>
        Login
      </Typography>
      <Grid item sx={6} md={6} mt={2}>
        <TextField
          name="email"
          label="User email"
          value={user.email}
          onChange={handleChange}
        >
          Enter email
        </TextField>
      </Grid>
      <Grid item sx={6} md={6} mt={2}>
        <TextField
          name="password"
          label="Password "
          value={user.password}
          onChange={handleChange}
        >
          Enter Pasword
        </TextField>
      </Grid>
      <Grid item sx={6} md={6} mt={2}>
        <Button onClick={login}>Login</Button>
      </Grid>
      <Grid item sx={6} md={6} mt={2}>
        <Typography>New Account?</Typography>
        <Button onClick={() => navigate("/signup")}>Register</Button>
      </Grid>
    </Box>
  );
};
