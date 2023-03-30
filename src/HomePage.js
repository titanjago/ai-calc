import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import SuspensionForm from './shared/SuspensionForm';

const GradientBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, gold, black, orange)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  margin: theme.spacing(2, 0),
}));

const HomePage = () => {
  const suspensionSettings = [
    // ...existing suspension settings
  ];

  return (
    <>
      <Box mt={2}>
        <SuspensionForm />
      </Box>
      <Container maxWidth="md">
        <GradientBox>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Orbitron' }}>
            Motocross Suspension Settings
          </Typography>
        </GradientBox>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Track</TableCell>
                <TableCell>Fork Compression</TableCell>
                <TableCell>Fork Rebound</TableCell>
                <TableCell>Shock Compression</TableCell>
                <TableCell>Shock Rebound</TableCell>
                <TableCell>Sag</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suspensionSettings.map((setting, index) => (
                <TableRow key={index}>
                  <TableCell>{setting.type}</TableCell>
                  <TableCell>{setting.forkCompression}</TableCell>
                  <TableCell>{setting.forkRebound}</TableCell>
                  <TableCell>{setting.shockCompression}</TableCell>
                  <TableCell>{setting.shockRebound}</TableCell>
                  <TableCell>{setting.sag}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default HomePage;
