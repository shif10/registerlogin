import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    // handlelogout();
  }, []);
  const handlelogout = () => {
    navigate("/signin");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  const deleteAccount = async (req, res) => {
    axios
      .post("http://localhost:9003/deleteaccount", {
        email: user.email,
      })
      .then(
        (res) => {
          if (res.status === 200) {
            alert("account delete sucessfully");
            navigate("/signin");
            localStorage.removeItem("token");
            localStorage.removeItem("userdata");
          }
        },
        (err) => {
          console.log("delete err is", err);
        }
      );
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
            alert("somthin went wrong");
          }
        },
        (err) => {
          localStorage.removeItem("token");
          // <redirect push to="/" />;

          console.log("error", err);

          if (err.response.status === 404) {
            setRedirect(true);
          }
        }
      );
  }, [token]);

  // useEffect(() => {
  //   if (redirect) {
  //     navigate("/");
  //   }
  // }, [redirect]);

  return (
    <>
      <Box
        sx={{
          boxShadow: "10px 20px grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          color: "secondary",
          flexDirection: "column",
        }}
      >
        <Box sx={{}}>
          <Button onClick={deleteAccount}>Delete Account</Button>
        </Box>
        <Typography>Hello {user?.name}</Typography>
        <Box>
          <Button onClick={handlelogout}>Logout</Button>
        </Box>
      </Box>
    </>
  );
};
