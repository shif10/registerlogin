import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
    console.log("user", user);
  };
  const register = () => {
    const { name, email, password } = user;

    if (name && email && password) {
      axios.post(`http://localhost:9003/register`, user).then(
        (res) => {
          navigate("/varifymail");
          localStorage.setItem("userdata", JSON.stringify(res?.data?.user));
          // console.log("response is", res);
          // console.log("clicked");
          alert("addds");

          console.log("res", res);
        },
        (err) => {
          alert(err?.response?.data?.error);
        }
      );
    } else {
      alert("invalid");
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        height={"100%"}
        boxShadow={(0, 0, "12px", "4px", "secondary")}
        marginTop={"5rem"}
      >
        <Typography variant="h3" mb={4}>
          Sign Up
        </Typography>
        <Grid item sx={6} md={6} mt={2}>
          <TextField
            label="User Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          >
            Enter Name
          </TextField>
        </Grid>
        <Grid item sx={6} md={6} mt={2}>
          <TextField
            name="password"
            label="Password"
            value={user.password}
            onChange={handleChange}
          >
            Enter Pasword
          </TextField>
        </Grid>
        <Grid item sx={6} md={6} mt={2}>
          <TextField
            name="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
            type="email"
          >
            Enter Email
          </TextField>
        </Grid>
        <Grid
          item
          sx={6}
          md={6}
          mt={2}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Button onClick={register}>Register</Button>
          <Typography>Already registered ?</Typography>
          <Button onClick={() => navigate("/")}>Login</Button>
        </Grid>
      </Box>
    </>
  );
};
