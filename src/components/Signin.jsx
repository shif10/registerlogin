import React, { useState } from "react";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log("user", user);
  };
  return (
    <Box
      //   display={"flex"}
      //   justifyContent={"center"}
      //   flexDirection={"column"}
      //   alignItems={"center"}
      //   height={"100%"}
      //   boxShadow={(0, 0, "12px", "4px", "secondary")}
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
          name="name"
          label="User Name"
          value={user.name}
          onChange={handleChange}
        >
          Enter Name
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
        <Button>Login</Button>
      </Grid>
      <Grid item sx={6} md={6} mt={2}>
        <Typography>New Account?</Typography>
        <Button onClick={() => navigate("/signup")}>Register</Button>
      </Grid>
    </Box>
  );
};
