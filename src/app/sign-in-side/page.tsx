"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import SignInCard from "./SignInCard";
import Content from "./Content";

export default function SignInSide() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={(theme) => ({
          backgroundImage:
            "radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
          backgroundSize: "cover",
          height: { xs: "auto", md: "100dvh" },
          pb: { xs: 12, sm: 0 },
          ...theme.applyStyles("light", {
            backgroundImage:
              "radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
          }),
        })}
        component="main"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: { sm: "static", md: "fixed" },
            width: "100%",
            p: { xs: 2, sm: 4 },
          }}
        >
          <Button startIcon={<ArrowBackRoundedIcon />} component="a" href="/">
            Back
          </Button>
        </Stack>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="center"
          gap={{ xs: 6, sm: 12 }}
          sx={{ height: { xs: "100%", md: "100dvh" }, p: 2 }}
        >
          <Content />
          <SignInCard />
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
