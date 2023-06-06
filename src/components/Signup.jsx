import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

export const Signup = () => {
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
          console.log("response is", res);
          console.log(user);
        },
        (err) => {
          console.log("error is", err);
        }
      );
      alert("added");
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
          >
            Enter Email
          </TextField>
        </Grid>
        <Grid item sx={6} md={6} mt={2}>
          <Button onClick={register}>Register</Button>
        </Grid>
      </Box>
    </>
  );
};
