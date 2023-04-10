import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const GradientCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(to right, gold, orange)",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
}));

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [racefansVisible, setRacefansVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call Firebase signup method here
  };

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
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                marginTop: 1,
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus  inputProps={{ style: { fontFamily: "Impact, Charcoal, sans-serif", letterSpacing: "2px", color: "white" } }}
                sx={{ "& label.Mui-focused": { color: "white" }, "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" }, "&:hover fieldset": { borderColor: "white" }, "&.Mui-focused fieldset": { borderColor: "white" } } }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{ style: { fontFamily: "Impact, Charcoal, sans-serif", letterSpacing: "2px", color: "white" } }}
                sx={{ "& label.Mui-focused": { color: "white" }, "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" }, "&:hover fieldset": { borderColor: "white" }, "&.Mui-focused fieldset": { borderColor: "white" } } }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                inputProps={{ style: { fontFamily: "Impact, Charcoal, sans-serif", letterSpacing: "2px", color: "white" } }}
                sx={{ "& label.Mui-focused": { color: "white" }, "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" }, "&:hover fieldset": { borderColor: "white" }, "&.Mui-focused fieldset": { borderColor: "white" } } }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, fontFamily: "Impact, Charcoal, sans-serif", letterSpacing: "2px", textTransform: "uppercase", backgroundColor: "orange", "&:hover": { backgroundColor: "gold" } }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/forgot-password" variant="body2" sx={{ color: "white", fontFamily: "Impact, Charcoal, sans-serif", letterSpacing: "2px" }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/login" variant="body2" sx={{ color: "white", fontFamily: "Impact, Charcoal, sans-serif", letterSpacing: "2px" }}>
                    {"Already have an account? Log In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </GradientCard>
        </Box>
      </Container>
    </Box>
    );
    };
    
    export default SignupPage;
