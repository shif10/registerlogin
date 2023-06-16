import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const handlelogout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    console.log("token is", token);
    setToken(localStorage.getItem("token"));
    axios
      .get(`http://localhost:9003/home`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(
        (res) => {
          console.log("response is ", res);
          if (res.status === 200) {
            navigate("/home");
          } else {
            navigate("/signin");
            alert("somthin went wrong");
          }
        },
        (err) => {
          localStorage.removeItem("token");
          navigate("/signin");
          console.log("error", err);
        }
      );
  }, [token]);

  return (
    <>
      <Box
        sx={{
          boxShadow: "10px 20px grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "secondary",
          flexDirection: "column",
        }}
      >
        <Typography>Hello {user?.name}</Typography>
        <Box>
          <Button onClick={handlelogout}>Logout</Button>
        </Box>
      </Box>
    </>
  );
};
