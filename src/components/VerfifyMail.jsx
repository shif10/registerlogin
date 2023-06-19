import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

export const VerfifyMail = () => {
  const userData = JSON.parse(localStorage.getItem("userdata"));
  console.log("userdata areess", userData);
  //   console.log(userData);
  useEffect(() => {
    axios.get("http://localhost:9003/varifymail").then((res) => {
      console.log("hello", res.data.user);
    });
    if (userData.is_varified === 1) {
      console.log("is veried");
    } else {
      console.log("is not");
    }
  }, []);
  const resendmail = () => {
    axios
      .get("http://localhost:9003/resendmail", {
        name: "userData.name",
        email: "userData.email",
        id: " userData._id",
      })
      .then(
        (res) => {
          console.log("resend mail response", res);
        },
        (err) => {
          console.log("resned mail error is", err);
        }
      );
  };
  return (
    <div>
      <p>
        Please verify your mail your mail is <b>{userData?.email} </b>
      </p>
      <br></br> <Button onClick={resendmail}>Resend mail</Button>
    </div>
  );
};
