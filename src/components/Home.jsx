import { Box, Typography } from "@mui/material";
import React from "react";
export const Home = () => {
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
      <Typography>Hello</Typography>
    </Box>
  );
};
