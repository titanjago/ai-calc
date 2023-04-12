import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(90deg, rgba(255, 165, 0, 1) 0%, rgba(255, 215, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 18px rgba(0, 0, 0, 0.12)',
}));

const FullScreenContainer = styled('div')({
  minHeight: '100vh',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the backend API here to save the email

    setEmail('');
  };

  return (
    <FullScreenContainer>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="h2">
            Sign up for Release Updates
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              sx={{ marginTop: 2, marginBottom: 2 }}
            />
            <Button type="submit" variant="contained" fullWidth>
              Sign up
            </Button>
          </form>
        </CardContent>
      </StyledCard>
    </FullScreenContainer>
  );
};

export default EmailSignup;
