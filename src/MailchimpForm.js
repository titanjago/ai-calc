import React from "react";
import { Box, TextField, Button } from "@mui/material";

const MailchimpForm = () => {
  return (
    <Box component="form" noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="mce-EMAIL"
        label="Email Address"
        name="EMAIL"
        type="email"
        autoComplete="email"
        inputProps={{
          style: {
            fontFamily: "Impact, Charcoal, sans-serif",
            letterSpacing: "2px",
            color: "white",
          },
        }}
        sx={{
          "& label.Mui-focused": { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
          },
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          fontFamily: "Impact, Charcoal, sans-serif",
          letterSpacing: "2px",
          textTransform: "uppercase",
          backgroundColor: "orange",
          "&:hover": { backgroundColor: "gold" },
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default MailchimpForm;
