import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Card,
} from "@mui/material";
import { styled } from "@mui/system";
import MailchimpForm from "./MailchimpForm"; // Import MailchimpForm component

const GradientCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(to right, gold, orange)",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
}));

const SignupPage = () => {
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [racefansVisible, setRacefansVisible] = useState(false);

  useEffect(() => {
    let interval = null;

    // Fade in "Welcome" text
    interval = setInterval(() => {
      setWelcomeVisible(true);
    }, 1000);

    // Fade out "Welcome" text
    setTimeout(() => {
      setWelcomeVisible(false);
    }, 3000);

    // Fade in "Racefans" text
    setTimeout(() => {
      setRacefansVisible(true);
    }, 4000);

    // Fade out "Racefans" text
    setTimeout(() => {
      setRacefansVisible(false);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <Box
        className="fade-background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          animation: "fade-background 8s infinite",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: "10rem",
            color: "white",
            textAlign: "center",
            margin: "auto",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Impact, Charcoal, sans-serif",
            letterSpacing: "2px",
            textShadow: "2px 2px #ff8c00",
            opacity: welcomeVisible || racefansVisible ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {welcomeVisible ? "Welcome" : "Racefans"}
        </Typography>
      </Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <GradientCard>
            {/* Add MailchimpForm component */}
            <MailchimpForm />
          </GradientCard>
        </Box>
      </Container>
    </Box>
  );
};

export default SignupPage;
