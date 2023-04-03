import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import SuspensionForm from './shared/SuspensionForm';

const GradientBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, gold, orange)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  margin: theme.spacing(2, 0),
}));

const HomePage = () => {
  return (
    <>
      <Box mt={2}>
        <SuspensionForm />
      </Box>
      <Container maxWidth="md">
        <GradientBox>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Orbitron' }}>
            Moto Settings
          </Typography>
        </GradientBox>
      </Container>
    </>
  );
};

export default HomePage;
