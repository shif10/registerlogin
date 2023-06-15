import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Home = ({ user }) => {
  const navigate = useNavigate();
  const [users, setUser] = useState();
  axios
    .get(`http://localhost:9003/home`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(
      (res) => {},
      (err) => {
        navigate("/signin");
      }
    );

  return (
    <Box
      sx={{
        boxShadow: "10px 20px grey",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "secondary",
      }}
    >
      <Typography>Hello {user?.name && user.name}</Typography>
    </Box>
  );
};
