import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const VerfifyMail = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [is_var, setISvar] = useState("false");
  const userData = JSON.parse(localStorage.getItem("userdata"));
  console.log("userdata areess", userData);
  console.log("id is", id);
  //   console.log(userData);
  useEffect(() => {
    axios
      .post("http://localhost:9003/verify", {
        userId: id,
      })
      .then(
        (res) => {
          if (res.status === 200) {
            navigate("/signin");
            localStorage.setItem("isvarified", "true");
          } else {
            navigate("/varifyMail");
          }
        },
        (err) => {
          console.log("varify fronted err", err);
          navigate("/varifyMail");
        }
      );
    if (userData?.is_varified === 1) {
      console.log("is verifed");
      navigate("/signin");
    } else {
      console.log("is not");
    }
  }, []);

  const resendmail = () => {
    axios
      .post("http://localhost:9003/resendmail", {
        name: userData?.name,
        email: userData?.email,
        id: userData?._id,
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
